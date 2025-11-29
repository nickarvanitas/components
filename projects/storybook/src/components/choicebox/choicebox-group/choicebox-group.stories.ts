import type { Meta, StoryObj } from '@storybook/angular';
import { ChoiceboxGroup } from './choicebox-group';
import { Choicebox } from '../choicebox/choicebox';

const meta: Meta<ChoiceboxGroup> = {
  title: 'Components/ChoiceboxGroup',
  component: ChoiceboxGroup,
  subcomponents: { Choicebox },
};

export default meta;
type Story = StoryObj<ChoiceboxGroup>;

export const Basic: Story = {
  args: {
    direction: 'row',
    type: 'radio',
    name: 'size-options',
    value: 'basic',
    choiceboxes: [
      { title: 'Basic', description: 'Best for compact layouts and mobile screens.', value: 'basic', disabled: false },
      { title: 'Advanced', description: 'Recommended for most use cases or forms.', value: 'advanced', disabled: false },
    ],
  } as Partial<Record<keyof ChoiceboxGroup, any>>,
};

