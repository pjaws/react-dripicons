import DeviceMobile from 'icons/deviceMobile';

export default {
  title: 'Icons/DeviceMobile',
  component: DeviceMobile,
};

const Template = (args) => <DeviceMobile {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
