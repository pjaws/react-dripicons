import Lock from './lock';

export default {
  title: 'Icons/Lock',
  component: Lock,
};

function Template(args) {
  return <Lock {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
