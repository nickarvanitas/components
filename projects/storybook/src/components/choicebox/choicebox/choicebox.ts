import { Component, computed, input, output } from '@angular/core';
import { Stack } from '../../layout/stack/stack';

@Component({
  selector: 'ui-choicebox',
  imports: [Stack],
  template: `
    <label [class]="labelClasses()" [for]="value()">
      <input 
        [id]="value()"
        [type]="type()" 
        [value]="value()" 
        [name]="name()"
        [disabled]="disabled()" 
        [checked]="checked()"
        (change)="handleChange()"
        class="absolute opacity-0 w-0 h-0"
      />
      <span [class]="checkmarkClasses()">
        @if (checked() && type() === 'checkbox') {
          <svg class="size-3 text-white" viewBox="0 0 12 12" fill="none">
            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        }
        @if (checked() && type() === 'radio') {
          <span class="size-2 rounded-full bg-white"></span>
        }
      </span>
      <ui-stack class="select-none" gap="0">
        <span class="font-medium">{{ title() }}</span>
        @if (description()) {
          <span class="text-sm text-gray-500">{{ description() }}</span>
        }
      </ui-stack>
    </label>
  `,
})
export class Choicebox {
  title = input<string>('');
  description = input<string | undefined>(undefined);
  value = input<string>('');
  name = input<string>('');
  disabled = input<boolean>(false);
  type = input<'radio' | 'checkbox'>('radio');
  checked = input<boolean>(false);
  onChange = output<void>();

  handleChange(): void {
    if (!this.disabled()) {
      this.onChange.emit();
    }
  }

  labelClasses = computed(() => {
    const base = 'relative inline-flex items-start gap-x-3 px-4 py-3 rounded-lg border-2 transition-all';
    const cursor = this.disabled() ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:border-blue-300';
    const state = this.checked() 
      ? 'border-blue-500 bg-blue-50' 
      : 'border-zinc-200 bg-white';
    return `${base} ${cursor} ${state}`;
  });

  checkmarkClasses = computed(() => {
    const base = 'flex items-center justify-center shrink-0 border-2 transition-all mt-0.5';
    const size = 'size-5';
    const shape = this.type() === 'radio' ? 'rounded-full' : 'rounded';
    const state = this.checked()
      ? 'border-blue-500 bg-blue-500'
      : 'border-zinc-300 bg-white';
    
    return `${base} ${size} ${shape} ${state}`;
  });
}
