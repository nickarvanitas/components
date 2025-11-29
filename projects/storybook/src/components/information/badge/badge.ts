import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'ui-badge',
  imports: [],
  template: `
    <div [class]="classes()">
      <span>{{ label() }}</span>
      @if (icon()) {
        <i [class]="icon()"></i>
      }
    </div>
  `,
})
export class Badge {
  color = input<BadgeColor>('blue');
  label = input.required<string>();
  icon = input<string>('');
  iconPos = input<'left' | 'right'>('left');
  variant = input<'solid' | 'light'>('solid');
  size = input<'xs' | 'sm' | 'md' | 'lg'>('md');

  classes = computed(() => {
    const baseClass = 'inline-flex items-center gap-x-1 rounded-full text-xs font-medium';
    const sizeMap: Record<BadgeSize, string> = {
      xs: 'px-1.5 py-1 text-xs',
      sm: 'px-2 py-1.5 text-sm',
      md: 'px-2.5 py-2 text-base',
      lg: 'px-3 py-2.5 text-lg',
    };
    const colorMap: Record<'solid' | 'light', Record<BadgeColor, string>> = {
      solid: {
        blue: 'bg-blue-600 text-white',
        green: 'bg-green-600 text-white',
        red: 'bg-red-600 text-white',
        yellow: 'bg-yellow-600 text-white',
        purple: 'bg-purple-600 text-white',
        orange: 'bg-orange-600 text-white',
      },
      light: {
        blue: 'bg-blue-50 text-blue-600',
        green: 'bg-green-50 text-green-600',
        red: 'bg-red-50 text-red-600',
        yellow: 'bg-yellow-50 text-yellow-600',
        purple: 'bg-purple-50 text-purple-600',
        orange: 'bg-orange-50 text-orange-600',
      },
    };
    const iconPosMap: Record<'left' | 'right', string> = {
      left: 'flex-row-reverse',
      right: 'flex-row',
    };
    return `${baseClass} ${sizeMap[this.size()]} ${colorMap[this.variant()][this.color()]} ${iconPosMap[this.iconPos()]}`;
  });
  

}

type BadgeColor = 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'orange';
type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';