import Box from './box';

export default {
  title: 'Icons/Box',
  component: Box,
};

function Template(args) {
  return <Box {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
