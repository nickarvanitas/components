import type { Meta, StoryObj } from '@storybook/angular';
import { Avatar } from './avatar';

const meta: Meta<Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
};

export default meta;
type Story = StoryObj<Avatar>;

export const Basic: Story = {
  args: {
    size: 'md',
    email: 'test1@example.com',
    alt: 'John Doe',
  } as Partial<Record<keyof Avatar, any>>,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    email: {
      control: 'text',
    },
  },
};
