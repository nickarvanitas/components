import type { Meta, StoryObj } from '@storybook/angular';
import { Choicebox } from './choicebox';

const meta: Meta<Choicebox> = {
  title: 'Components/Choicebox',
  component: Choicebox,
};

export default meta;
type Story = StoryObj<Choicebox>;

export const Radio: Story = {
  args: {
    title: 'Option 1',
    value: 'option1',
    name: 'choice',
    disabled: false,
    type: 'radio',
    checked: false,
  } as Partial<Record<keyof Choicebox, any>>,
};

export const Checkbox: Story = {
  args: {
    title: 'Accept terms and conditions',
    value: 'terms',
    name: 'terms',
    disabled: false,
    type: 'checkbox',
    checked: false,
  } as Partial<Record<keyof Choicebox, any>>,
};
