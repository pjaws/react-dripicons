import DeviceTablet from './deviceTablet';

export default {
  title: 'Icons/DeviceTablet',
  component: DeviceTablet,
};

function Template(args) {
  return <DeviceTablet {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
