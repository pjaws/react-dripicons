import ArrowRight from 'icons/arrowRight';

export default {
  title: 'Icons/ArrowRight',
  component: ArrowRight,
};

const Template = (args) => <ArrowRight {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
