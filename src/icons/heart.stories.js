import Heart from './heart';

export default {
  title: 'Icons/Heart',
  component: Heart,
};

function Template(args) {
  return <Heart {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
