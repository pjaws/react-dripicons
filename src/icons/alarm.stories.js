import Alarm from 'icons/alarm';

export default {
  title: 'Icons/Alarm',
  component: Alarm,
};

const Template = (args) => <Alarm {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
