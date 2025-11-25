import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Basic: Story = {
  args: {
    label: 'Button',
    color: 'primary',
    size: 'md',
    variant: 'solid',
    icon: 'fa-solid fa-arrow-right',
    iconPos: 'right',
    disabled: false,
    loading: false,
    type: 'button',
    target: '_self',
    href: '',
  } as Partial<Record<keyof ButtonComponent, any>>,
};
