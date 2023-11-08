import Phone from './phone';

export default {
  title: 'Icons/Phone',
  component: Phone,
};

function Template(args) {
  return <Phone {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
