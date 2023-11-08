import DeviceDesktop from './deviceDesktop';

export default {
  title: 'Icons/DeviceDesktop',
  component: DeviceDesktop,
};

function Template(args) {
  return <DeviceDesktop {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
