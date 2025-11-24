import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button
  type="button"
  class="bg-blue-600 hover:bg-blue-900 text-white px-4 py-2 rounded-md"
  [ngClass]="classes()"
>
  {{ label() }}
</button>`,
})
export class ButtonComponent {
  label = input<string | undefined>()
  color = input<ButtonColor>('blue')
  size = input.required<ButtonSize>()

  classes = computed(() => {

    const colorClass: Record<ButtonColor, string> = {
      'blue': '',
      'red': '',
      'neutral': ''
    }

    const sizeClass = computed(() => ({
      sm: 'text-xs px-2 py-1',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-6 py-3',
    } satisfies Record<ButtonSize, string>)[this.size()]);

    return `${colorClass} ${sizeClass}`
  })
}

export type ButtonColor = 'blue' | 'red' | 'neutral'
export type ButtonSize = 'sm' | 'md' | 'lg'