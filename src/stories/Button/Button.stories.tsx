import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    asChild: false,
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    children: {
      description: "Content of the button",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Props",
      },
    },
    variant: {
      description: "Variant of the button",
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      table: {
        defaultValue: { summary: "default" },
        type: {
          summary: "default | destructive | outline | secondary | ghost | link",
        },
        category: "Props",
      },
    },
    size: {
      description: "Size of the button",
      control: "select",
      options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
      table: {
        defaultValue: { summary: "default" },
        type: {
          summary: "default | sm | lg | icon | icon-sm | icon-lg",
        },
        category: "Props",
      },
    },
    asChild: {
      description: "Render button as a child component",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
        category: "Props",
      },
    },
    disabled: {
      description: "Whether the button is disabled or not",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
        category: "Props",
      },
    },
    onClick: {
      description: "Click event handler",
      table: {
        type: {
          summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
        },
        category: "Events",
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    children: "BUY_TICKETS",
    variant: "default",
  },
  play: async function ({ args, canvas, userEvent }) {
    const button = canvas.getByRole("button", { name: /button/i });

    await userEvent.click(button);

    await expect(button).not.toBeDisabled();
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Disabled: Story = {
  args: {
    children: "SOLD_OUT",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: (
      <>
        BUY_TICKETS
        <Spinner />
      </>
    ),
  },
};

export const CustomRender: Story = {
  render: (args) => (
    <Button {...args} className="bg-green-500">
      BUY_TICKETS
    </Button>
  ),
};

// export const Dark: Story = {
//   args: {
//     children: "Dark Button",
//   },
//   parameters: {
//     themes: {
//       themeOverride: "dark",
//     },
//   },
// };
