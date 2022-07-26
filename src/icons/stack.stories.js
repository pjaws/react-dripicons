import Stack from 'icons/stack';

export default {
  title: 'Icons/Stack',
  component: Stack,
};

const Template = (args) => <Stack {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
