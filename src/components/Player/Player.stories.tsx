import { Meta } from "@storybook/react";
import { Player } from "./Player";

export default {
  component: Player,
  title: "Player",
  argTypes: {},
} as Meta;

const Template = (args) => <Player {...args} />;

export const Default = Template.bind({});
Default.args = {};
