import Broadcast from './broadcast';

export default {
  title: 'Icons/Broadcast',
  component: Broadcast,
};

function Template(args) {
  return <Broadcast {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
