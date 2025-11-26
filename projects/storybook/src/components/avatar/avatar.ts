import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'ui-avatar',
  imports: [],
  template: `
    <div [class]="classes()">
      <img [src]="src()" [alt]="alt()" />
    </div>
  `,
})
export class Avatar {
 size = input<AvatarSize | number>('md');

  classes = computed(() => {
    const baseClass = 'inline-flex items-center justify-center rounded-full';
    const sizeMap: Record<AvatarSize, string> = {
      xs: 'size-6',
      sm: 'size-8',
      md: 'size-10',
      lg: 'size-12',
      xl: 'size-14',
    };
    return `${baseClass} ${sizeMap[this.size()]}`;
  });

  src = input<string>('');
}

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';