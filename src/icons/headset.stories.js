import Headset from './headset';

export default {
  title: 'Icons/Headset',
  component: Headset,
};

function Template(args) {
  return <Headset {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
