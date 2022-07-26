import BatteryLow from 'icons/batteryLow';

export default {
  title: 'Icons/BatteryLow',
  component: BatteryLow,
};

const Template = (args) => <BatteryLow {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
