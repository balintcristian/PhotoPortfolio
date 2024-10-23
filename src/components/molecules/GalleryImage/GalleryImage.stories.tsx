import { Meta, StoryObj } from "@storybook/react";
import GalleryImage from "./GalleryImage";

const meta = {
  title: "molecules/GalleryImage",
  component: GalleryImage,
  tags: ["!autodocs"],
} satisfies Meta<typeof GalleryImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://leanstartup.co/wp-content/uploads/2017/10/board-361516_1920.jpg",
  },
};
