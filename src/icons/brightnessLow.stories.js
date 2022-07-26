import BrightnessLow from 'icons/brightnessLow';

export default {
  title: 'Icons/BrightnessLow',
  component: BrightnessLow,
};

const Template = (args) => <BrightnessLow {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
