import BatteryMedium from './batteryMedium';

export default {
  title: 'Icons/BatteryMedium',
  component: BatteryMedium,
};

function Template(args) {
  return <BatteryMedium {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
