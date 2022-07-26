import BatteryEmpty from 'icons/batteryEmpty';

export default {
  title: 'Icons/BatteryEmpty',
  component: BatteryEmpty,
};

const Template = (args) => <BatteryEmpty {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
