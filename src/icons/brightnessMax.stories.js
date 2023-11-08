import BrightnessMax from './brightnessMax';

export default {
  title: 'Icons/BrightnessMax',
  component: BrightnessMax,
};

function Template(args) {
  return <BrightnessMax {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
