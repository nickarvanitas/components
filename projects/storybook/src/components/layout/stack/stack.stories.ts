import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { Stack } from './stack';

const meta: Meta<Stack> = {
  title: 'Layout/Stack',
  component: Stack,
};

export default meta;
type Story = StoryObj<Stack>;

export const Basic: Story = {
  args: {
    direction: 'column',
    gap: '2',
    align: 'start',
    justify: 'start',
    wrap: false,
  } as Partial<Record<keyof Stack, any>>,
  render: (args) => ({
    props: args,
    template: `
      <ui-stack ${argsToTemplate(args)}>
        <div class="bg-zinc-50 w-full max-w-md border border-zinc-200 rounded-md text-center py-1 border-dashed">Item 1</div>
        <div class="bg-zinc-50 w-full max-w-md border border-zinc-200 rounded-md text-center py-1 border-dashed">Item 2</div>
        <div class="bg-zinc-50 w-full max-w-md border border-zinc-200 rounded-md text-center py-1 border-dashed">Item 3</div>
      </ui-stack>
    `,
  })
};
