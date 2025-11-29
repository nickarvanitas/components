import { Component, computed, input } from '@angular/core';
import sha256 from 'crypto-js/sha256';

@Component({
  selector: 'ui-avatar',
  imports: [],
  host: {
    class: 'inline-flex',
  },
  template: `
    <div [class]="classes()">
      <img [src]="url()" [alt]="alt()" />
    </div>
  `,
})
export class Avatar {
 size = input<AvatarSize>('md');
 alt = input<string>('');
 email = input<string>('');

  classes = computed(() => {
    const baseClass = 'inline-flex items-center justify-center rounded-full overflow-hidden';
    const sizeMap: Record<AvatarSize, string> = {
      xs: 'size-6',
      sm: 'size-8',
      md: 'size-10',
      lg: 'size-12',
      xl: 'size-14',
    };
    return `${baseClass} ${sizeMap[this.size()]}`;
  });

  hashedEmail = computed(() => {
    return sha256( this.email() );
  });

  url = computed(() => {
    const sizeMap: Record<AvatarSize, number> = {
      xs: 24,
      sm: 32,
      md: 40,
      lg: 48,
      xl: 56,
    };
    const pixelSize = sizeMap[this.size()];
    return `https://gravatar.com/avatar/${this.hashedEmail()}?s=${pixelSize}&d=mp&r=g`;
  });

}

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';