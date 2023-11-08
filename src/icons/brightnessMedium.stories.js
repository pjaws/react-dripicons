import BrightnessMedium from './brightnessMedium';

export default {
  title: 'Icons/BrightnessMedium',
  component: BrightnessMedium,
};

function Template(args) {
  return <BrightnessMedium {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
