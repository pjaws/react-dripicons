import Code from 'icons/code';

export default {
  title: 'Icons/Code',
  component: Code,
};

const Template = (args) => <Code {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
