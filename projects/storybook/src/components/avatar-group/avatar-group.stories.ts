import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarGroup } from './avatar-group';
import { Avatar } from '../avatar/avatar';

const meta: Meta<AvatarGroup> = {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  subcomponents: { Avatar },
};

export default meta;
type Story = StoryObj<AvatarGroup>;

export const Basic: Story = {
  args: {
    size: 'md',
    limit: 2,
    people: [
      { email: 'test1@example.com', name: 'John Doe' },
      { email: 'test2@example.com', name: 'Jane Doe' },
      { email: 'test3@example.com', name: 'Jim Doe' },
    ],
  } as Partial<Record<keyof AvatarGroup, any>>,
};
