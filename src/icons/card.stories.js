import Card from './card';

export default {
  title: 'Icons/Card',
  component: Card,
};

function Template(args) {
  return <Card {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
