import Time from './time';

export default {
  title: 'Icons/Time',
  component: Time,
};

function Template(args) {
  return <Time {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
