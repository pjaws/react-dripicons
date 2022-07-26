import DeviceDesktop from 'icons/deviceDesktop';

export default {
  title: 'Icons/DeviceDesktop',
  component: DeviceDesktop,
};

const Template = (args) => <DeviceDesktop {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
