import Weight from './weight';

export default {
  title: 'Icons/Weight',
  component: Weight,
};

function Template(args) {
  return <Weight {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
