import BatteryEmpty from './batteryEmpty';

export default {
  title: 'Icons/BatteryEmpty',
  component: BatteryEmpty,
};

function Template(args) {
  return <BatteryEmpty {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
