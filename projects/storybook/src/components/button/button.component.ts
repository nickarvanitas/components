import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'ui-button',
  imports: [CommonModule],
  template: ` @if (href()) {
    <a
      class="inline-flex gap-x-1 select-none"
      [class.flex-row-reverse]="iconPos() !== 'right' || loading()"
      [ngClass]="[classes()]"
      [target]="target()"
      [href]="href()"
      >{{ label() }} @if (icon()) {
      <div
        [ngClass]="[
          'flex items-center justify-center',
          !label() ? iconOnlySize() : ''
        ]"
      >
        <i [ngClass]="[dynamicIcon()]"></i>
      </div>
      }
    </a>
    } @else {
    <button
      [attr.type]="type()"
      (click)="onClick.emit($event)"
      class="inline-flex gap-x-1 select-none"
      [class.flex-row-reverse]="iconPos() !== 'right' || loading()"
      [disabled]="disabled() || loading()"
      [ngClass]="[classes()]"
    >
      {{ label() }} @if (icon()) {
      <div
        [ngClass]="[
          'flex items-center justify-center',
          !label() ? iconOnlySize() : ''
        ]"
      >
        <i [ngClass]="[dynamicIcon()]"></i>
      </div>
      }
    </button>}`,
})
export class ButtonComponent {
  label = input<string>('');
  color = input<ButtonColor>('primary');
  size = input<ButtonSize>('md');

  variant = input<ButtonVariant>('solid');
  icon = input<string>('');
  iconPos = input<'left' | 'right'>('left');
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
  onClick = output<MouseEvent>();
  type = input<'button' | 'submit' | 'reset'>('button');
  target = input<'_blank' | '_self' | '_parent' | '_top'>('_self');
  href = input<string>('');

  classes = computed(() => {
    const baseClass = `inline-flex items-center font-medium transition-all duration-300 ease-in-out border rounded-md justify-center whitespace-nowrap`;

    const sizeMap: Record<ButtonSize, string> = {
      xs: this.label() ? 'px-1.5 py-1 text-xs' : 'p-[0.1875rem] text-xs',
      sm: this.label()
        ? 'px-2 py-[0.3125rem] text-sm'
        : 'p-[0.3125rem] text-sm',
      md: this.label()
        ? 'px-3 py-[0.4375rem] text-base'
        : 'p-[0.4375rem] text-base',
      lg: this.label()
        ? 'px-3 py-[0.5625rem] text-xl'
        : 'p-[0.5625rem] text-xl',
    };

    const colorMap: Record<ButtonVariant, Record<ButtonColor, string>> = {
      solid: {
        primary: 'bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-white',
        secondary:
          'bg-zinc-600 hover:bg-zinc-700 border-zinc-600 hover:border-zinc-700 text-white',
        error: 'bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-white',
        warning: 'bg-amber-500 hover:bg-amber-700 border-amber-500 hover:border-amber-700 text-black',
      },
      outline: {
        primary: 'border-blue-500 text-blue-500 hover:text-blue-700 hover:border-blue-700',
        secondary:
          'border-zinc-400 text-zinc-600 hover:text-zinc-700 hover:border-zinc-700',
        error: 'border-red-600 text-red-600 hover:text-red-700 hover:border-red-700',
        warning: 'border-amber-700 text-amber-700 hover:text-amber-800 hover:border-amber-800',
      },
      ghost: {
        primary: 'text-blue-500 hover:text-blue-700',
        secondary: 'text-zinc-600 hover:text-zinc-700',
        error: 'text-red-600 hover:text-red-700',
        warning: 'text-amber-700',
      },
      light: {
        primary: 'text-blue',
        secondary: 'text-zinc-700',
        error: 'text-red-600',
        warning: 'text-amber-700',
      },
    };

    const variantMap: Record<ButtonVariant, string> = {
      solid: '',
      outline: 'hover:bg-white',
      ghost: 'bg-transparent hover:bg-zinc-50 border-transparent',
      light:
        'bg-zinc-50 hover:bg-zinc-100 border-zinc-50 hover:border-zinc-100 border-transparent',
    };

    const gapMap: Record<ButtonSize, string> = {
      xs: 'gap-x-1.5',
      sm: 'gap-x-1.5',
      md: 'gap-x-2',
      lg: 'gap-x-2.5',
    };

    const disabledClass: string =
      'bg-zinc-200 border-zinc-200 hover:bg-zinc-200 hover:border-zinc-200 text-zinc-500 cursor-default !opacity-100';

    return `${baseClass} ${sizeMap[this.size()]} ${
      this.disabled() ? disabledClass : colorMap[this.variant()][this.color()]
    } ${variantMap[this.variant()]} ${gapMap[this.size()]}`;
  });

  iconOnlySize = computed(() => {
    const iconOnlySizeMap: Record<ButtonSize, string> = {
      xs: 'size-4',
      sm: 'size-5',
      md: 'size-6',
      lg: 'size-7',
    };
    return iconOnlySizeMap[this.size() || 'md'];
  });

  dynamicIcon = computed(() => {
    if (this.loading()) {
      return 'fa-solid fa-spinner fa-spin';
    } else {
      return this.icon() || '';
    }
  });
}

export type ButtonColor = 'primary' | 'secondary' | 'error' | 'warning';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'light';
