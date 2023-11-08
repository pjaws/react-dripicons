import Forward from './forward';

export default {
  title: 'Icons/Forward',
  component: Forward,
};

function Template(args) {
  return <Forward {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
