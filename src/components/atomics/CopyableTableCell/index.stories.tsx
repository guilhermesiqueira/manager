import { ComponentStory, ComponentMeta } from "@storybook/react";
import CopyableTableCell, { Props } from ".";

export default {
  title: "CopyableTableCell",
  component: CopyableTableCell,
} as ComponentMeta<typeof CopyableTableCell>;

const Template: ComponentStory<typeof CopyableTableCell> = function (
  args: Props,
) {
  return <CopyableTableCell {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  text: "ButtonSecondary"
};
