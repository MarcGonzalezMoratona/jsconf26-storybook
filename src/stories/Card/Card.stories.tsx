import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Card> = {
  title: "Organisms/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
};

export default meta;

export const Default: Story = {
  render: () => (
    <Card>
      <CardContent className="flex flex-col gap-2">
        <CardTitle>JSCONF ESPAÑA 2026</CardTitle>
        <CardDescription>This is a description of the card.</CardDescription>
      </CardContent>
      <CardFooter className="gap-2">
        <CardAction>
          <Button
            onClick={() => {
              toast.promise<{ name: string }>(
                () =>
                  new Promise((resolve) =>
                    setTimeout(() => resolve({ name: "Ticket" }), 2000)
                  ),
                {
                  loading: "Loading...",
                  success: (data) => `${data.name} has been created`,
                  error: "Error",
                }
              );
            }}
          >
            BUY_TICKETS
          </Button>
        </CardAction>
        <CardAction>
          <Button variant="outline">CONTACT</Button>
        </CardAction>
      </CardFooter>
    </Card>
  ),
};
