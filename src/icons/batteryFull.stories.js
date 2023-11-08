import BatteryFull from './batteryFull';

export default {
  title: 'Icons/BatteryFull',
  component: BatteryFull,
};

function Template(args) {
  return <BatteryFull {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
