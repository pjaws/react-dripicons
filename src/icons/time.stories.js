import Time from 'icons/time';

export default {
  title: 'Icons/Time',
  component: Time,
};

const Template = (args) => <Time {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
