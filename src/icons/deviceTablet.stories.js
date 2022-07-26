import DeviceTablet from 'icons/deviceTablet';

export default {
  title: 'Icons/DeviceTablet',
  component: DeviceTablet,
};

const Template = (args) => <DeviceTablet {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
