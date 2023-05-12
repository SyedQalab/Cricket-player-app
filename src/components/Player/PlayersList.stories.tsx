import { Story, Meta } from "@storybook/react";
import { PlayersList, PlayersListProps } from "./PlayersList";
import { PLAYERS_LIST } from "./constant";

export default {
  component: PlayersList,
  title: "Components/PlayersList",
  argTypes: {
    list: {
      control: {
        type: "object",
      },
    },
    setList: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<PlayersListProps> = (args) => <PlayersList {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: PLAYERS_LIST,
};
