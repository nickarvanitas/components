import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'ui-stack',
  imports: [],
  template: `
    <div [class]="classes()">
      <ng-content />
    </div>
  `,
})
export class Stack {
  direction = input<'column' | 'row'>('column');
  gap = input<StackGap>('0');
  align = input<'start' | 'center' | 'end'>('start');
  justify = input<'start' | 'center' | 'end'>('start');
  wrap = input<boolean>(false);

  classes = computed(() => {
    const baseClass = 'flex';
    const directionMap: Record<'column' | 'row', string> = {
      column: 'flex-col',
      row: 'flex-row',
    };
    const gapMap: Record<StackGap, string> = {
      0: 'gap-0',
      0.5: 'gap-0.5',
      1: 'gap-1',
      1.5: 'gap-1.5',
      2: 'gap-2',
      2.5: 'gap-2.5',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      7: 'gap-7',
      8: 'gap-8',
      9: 'gap-9',
      10: 'gap-10',
      11: 'gap-11',
      12: 'gap-12',
    };
    const alignMap: Record<'start' | 'center' | 'end', string> = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    };
    const justifyMap: Record<'start' | 'center' | 'end', string> = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
    };
    const wrapMap: Record<'true' | 'false', string> = {
      true: 'flex-wrap',
      false: 'flex-nowrap',
    };
    const classes = [
      baseClass,
      directionMap[this.direction()],
      gapMap[this.gap()],
      alignMap[this.align()],
      justifyMap[this.justify()],
      wrapMap[this.wrap() ? 'true' : 'false'],
    ].filter(Boolean);
    return classes.join(' ');
  });
}

export type StackGap = '0' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
