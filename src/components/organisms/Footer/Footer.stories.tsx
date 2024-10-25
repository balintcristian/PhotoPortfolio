import type { Meta, StoryObj } from "@storybook/react";

import Footer from "./Footer";
import IconLink from "@/components/molecules/IconLink/IconLink";

const meta = {
  title: "organisms/Footer",
  component: Footer,
  tags: ["!autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <IconLink url="" text="" IconAlt="" IconSrc="" />,
  },
};
