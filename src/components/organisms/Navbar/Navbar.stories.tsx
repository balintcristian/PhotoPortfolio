import type { Meta, StoryObj } from "@storybook/react";

import NavBar from "./Navbar";

import NavLinkList from "@/components/molecules/NavLinkList/NavLinkList";

const meta = {
  title: "organisms/NavBar",
  component: NavBar,
  tags: ["!autodocs"],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <NavLinkList />,
  },
};
