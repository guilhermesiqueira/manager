import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import IntegrationCard, { Props } from ".";

export default {
  title: "IntegrationCard",
  component: IntegrationCard,
} as ComponentMeta<typeof IntegrationCard>;

const Template: ComponentStory<typeof IntegrationCard> = function (
  args: Props,
) {
  return <IntegrationCard {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  title: "IntegrationCard",
  subtitle: "subtitle",
  value: "1000",
};
