import Box from 'icons/box';

export default {
  title: 'Icons/Box',
  component: Box,
};

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
