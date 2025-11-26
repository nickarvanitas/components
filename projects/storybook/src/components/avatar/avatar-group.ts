import { Component, computed, input } from '@angular/core';
import { AvatarSize } from './avatar';

@Component({
  selector: 'ui-avatar-group',
  imports: [],
  template: `
    <div [class]="classes()">
        @for (avatar of people(); track avatar.id) {
          <ui-avatar [src]="avatar.src()" [alt]="'Avatar for ' + avatar.name" [size]="size()" />
        }
    </div>
  `,
})
export class AvatarGroup {
 size = input<AvatarSize>('md');
 people = input<AvatarGroupPerson[]>([]);

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
}

type AvatarGroupPerson = {
  id: string;
  src: string;
  name: string;
};
