import Bluetooth from './bluetooth';

export default {
  title: 'Icons/Bluetooth',
  component: Bluetooth,
};

function Template(args) {
  return <Bluetooth {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
