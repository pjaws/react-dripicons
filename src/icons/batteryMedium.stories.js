import BatteryMedium from 'icons/batteryMedium';

export default {
  title: 'Icons/BatteryMedium',
  component: BatteryMedium,
};

const Template = (args) => <BatteryMedium {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
