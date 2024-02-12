import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from ".";

const meta: Meta<typeof Typography> = {
  title: "ui/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Typography>;

export const Base: Story = {
  render: (args) => <Typography {...args}>Base</Typography>,
  args: {},
};

// export const RedText: Story = {
//   render: (args) => <Typography {...args}>Base</Typography>,
//   args: {},
// };
