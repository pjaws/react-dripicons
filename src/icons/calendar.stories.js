import Calendar from 'icons/calendar';

export default {
  title: 'Icons/Calendar',
  component: Calendar,
};

const Template = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
