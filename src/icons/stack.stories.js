import Stack from './stack';

export default {
  title: 'Icons/Stack',
  component: Stack,
};

function Template(args) {
  return <Stack {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
