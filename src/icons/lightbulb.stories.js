import Lightbulb from 'icons/lightbulb';

export default {
  title: 'Icons/Lightbulb',
  component: Lightbulb,
};

const Template = (args) => <Lightbulb {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
