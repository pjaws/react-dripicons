import BrightnessMax from 'icons/brightnessMax';

export default {
  title: 'Icons/BrightnessMax',
  component: BrightnessMax,
};

const Template = (args) => <BrightnessMax {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
