import BatteryLow from './batteryLow';

export default {
  title: 'Icons/BatteryLow',
  component: BatteryLow,
};

function Template(args) {
  return <BatteryLow {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
