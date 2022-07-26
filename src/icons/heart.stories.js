import Heart from 'icons/heart';

export default {
  title: 'Icons/Heart',
  component: Heart,
};

const Template = (args) => <Heart {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
