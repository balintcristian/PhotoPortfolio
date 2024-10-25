import type { Meta, StoryObj } from "@storybook/react";
import NavLinkList from "./NavLinkList";

const meta = {
  title: "molecules/NavLinkList",
  component: NavLinkList,
  tags: ["!autodocs"],
} satisfies Meta<typeof NavLinkList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "w300",
  },
};
