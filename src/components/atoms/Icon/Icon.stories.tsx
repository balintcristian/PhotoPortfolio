import { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";

const meta = {
  title: "atoms/Icon",
  component: Icon,
  tags: ["!autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "test",
    src: "https://www.bing.com/images/search?view=detailV2&ccid=26CuXJnl&id=E625CF8312B2208DB776052D130D4C270E80EB5D&thid=OIP.26CuXJnl--vIDuTJzVjmLQAAAA&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.dba0ae5c99e5fbebc80ee4c9cd58e62d%3frik%3dXeuADidMDRMtBQ%26riu%3dhttp%253a%252f%252felectrical-accidents.com%252fThemeImages%252fPhone-icon-5.png%26ehk%3djZU1YL7a9XM8ZKoqt66DVfAM1sckkcO4A4dFt7IaRnI%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=54&expw=64&q=icon&simid=608021220868557481&FORM=IRPRST&ck=4D01223F57062D1B5A7F0A8BA0F7BAB2&selectedIndex=23&itb=1&qft=+filterui%3aimagesize-small",
  },
};
