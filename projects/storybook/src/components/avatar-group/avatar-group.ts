import { Component, computed, input } from '@angular/core';
import { Avatar, AvatarSize } from '../avatar/avatar';
import { Stack } from '../layout/stack/stack';

@Component({
  selector: 'ui-avatar-group',
  imports: [Avatar, Stack],
  template: `
    <ui-stack direction="row" gap="0" cx="*:nth-[n+2]:-ml-2">
        @for (avatar of people().slice(0, limit()); track avatar.email) {
          <ui-avatar [email]="avatar.email" [alt]="'Avatar for ' + avatar.name" [size]="size()" />
        }
        @if (people().length > limit()) {
          <div [class]="excessLimitClasses()">
            +{{ people().length - limit() }}
          </div>
        }
    </ui-stack>
  `,
})

export class AvatarGroup {
 size = input<AvatarSize>('md');
 people = input<AvatarGroupPerson[]>([]);
 limit = input<number>(2);

 excessLimitClasses = computed(() => {

  const sizeMap: Record<AvatarSize, string> = {
    xs: 'size-6 text-xs',
    sm: 'size-8 text-sm',
    md: 'size-10 text-base',
    lg: 'size-12 text-lg',
    xl: 'size-14 text-xl',
  };
  return `flex items-center justify-center bg-zinc-800 text-white rounded-full ${sizeMap[this.size()]}`;
 });
}

type AvatarGroupPerson = {
  email: string;
  name: string;
  alt: string;
};
