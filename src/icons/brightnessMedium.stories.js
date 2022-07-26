import BrightnessMedium from 'icons/brightnessMedium';

export default {
  title: 'Icons/BrightnessMedium',
  component: BrightnessMedium,
};

const Template = (args) => <BrightnessMedium {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
