import Mail from './mail';

export default {
  title: 'Icons/Mail',
  component: Mail,
};

function Template(args) {
  return <Mail {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
