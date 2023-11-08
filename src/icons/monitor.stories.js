import Monitor from './monitor';

export default {
  title: 'Icons/Monitor',
  component: Monitor,
};

function Template(args) {
  return <Monitor {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
