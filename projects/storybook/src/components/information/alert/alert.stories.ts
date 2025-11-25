import type { Meta, StoryObj } from '@storybook/angular';
import { Alert } from './alert';

const meta: Meta<Alert> = {
  title: 'Information/Alert',
  component: Alert,
};

export default meta;
type Story = StoryObj<Alert>;

export const Basic: Story = {
  args: {
    severity: 'error',
    title: 'Alert',
    message: 'This is an alert message.',
    raised: false,
  } as Partial<Record<keyof Alert, any>>,
};
