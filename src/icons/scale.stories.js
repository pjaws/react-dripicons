import Scale from './scale';

export default {
  title: 'Icons/Scale',
  component: Scale,
};

function Template(args) {
  return <Scale {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
