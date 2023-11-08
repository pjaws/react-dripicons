import Basketball from './basketball';

export default {
  title: 'Icons/Basketball',
  component: Basketball,
};

function Template(args) {
  return <Basketball {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
