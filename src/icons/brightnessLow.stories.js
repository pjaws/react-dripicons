import BrightnessLow from './brightnessLow';

export default {
  title: 'Icons/BrightnessLow',
  component: BrightnessLow,
};

function Template(args) {
  return <BrightnessLow {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
