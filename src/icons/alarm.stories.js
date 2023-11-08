import Alarm from './alarm';

export default {
  title: 'Icons/Alarm',
  component: Alarm,
};

function Template(args) {
  return <Alarm {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
