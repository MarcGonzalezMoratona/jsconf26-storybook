import type { Meta, StoryObj } from "@storybook/react-vite";
import { SonnerTypes as Toast } from "./Toast";

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Toast> = {
  title: "Molecules/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
};

export default meta;

export const Default: Story = {
  args: {},
};
