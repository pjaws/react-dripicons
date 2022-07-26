import Weight from 'icons/weight';

export default {
  title: 'Icons/Weight',
  component: Weight,
};

const Template = (args) => <Weight {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
