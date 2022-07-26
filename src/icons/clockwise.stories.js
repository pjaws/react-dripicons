import Clockwise from 'icons/clockwise';

export default {
  title: 'Icons/Clockwise',
  component: Clockwise,
};

const Template = (args) => <Clockwise {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
