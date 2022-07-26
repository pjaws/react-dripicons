import Star from 'icons/star';

export default {
  title: 'Icons/Star',
  component: Star,
};

const Template = (args) => <Star {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
