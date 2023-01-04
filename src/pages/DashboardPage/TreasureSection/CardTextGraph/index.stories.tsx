import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardTextGraph, { Props } from ".";

export default {
  title: "CardTextGraph",
  component: CardTextGraph,
} as ComponentMeta<typeof CardTextGraph>;

const Template: ComponentStory<typeof CardTextGraph> = function (args: Props) {
  return <CardTextGraph {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  title: "CardTextGraph",
  leftText: "leftText",
  treasureBalance: 10,
};
