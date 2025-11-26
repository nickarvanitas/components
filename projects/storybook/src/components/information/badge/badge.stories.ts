import type { Meta, StoryObj } from '@storybook/angular';
import { Badge } from './badge';

const meta: Meta<Badge> = {
  title: 'Information/Badge',
  component: Badge,
};

export default meta;
type Story = StoryObj<Badge>;

export const Basic: Story = {
  args: {
    color: 'blue',
    label: 'Badge',
    icon: 'fa-solid fa-info-circle',
    iconPos: 'left',
    variant: 'solid',
    size: 'md',
  } as Partial<Record<keyof Badge, any>>,
};
