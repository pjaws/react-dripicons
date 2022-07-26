import Hourglass from 'icons/hourglass';

export default {
  title: 'Icons/Hourglass',
  component: Hourglass,
};

const Template = (args) => <Hourglass {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
