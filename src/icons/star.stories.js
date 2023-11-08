import Star from './star';

export default {
  title: 'Icons/Star',
  component: Star,
};

function Template(args) {
  return <Star {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
