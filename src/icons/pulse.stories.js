import Pulse from './pulse';

export default {
  title: 'Icons/Pulse',
  component: Pulse,
};

function Template(args) {
  return <Pulse {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
