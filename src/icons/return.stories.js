import Return from './return';

export default {
  title: 'Icons/Return',
  component: Return,
};

function Template(args) {
  return <Return {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
