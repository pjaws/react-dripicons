import Code from './code';

export default {
  title: 'Icons/Code',
  component: Code,
};

function Template(args) {
  return <Code {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
