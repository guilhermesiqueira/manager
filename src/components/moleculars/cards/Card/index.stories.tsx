import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card, { Props } from ".";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = function (args: Props) {
  return <Card {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  title: "Card",
  children: <p>Teste</p>,
};
