import Calendar from './calendar';

export default {
  title: 'Icons/Calendar',
  component: Calendar,
};

function Template(args) {
  return <Calendar {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
