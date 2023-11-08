import Print from './print';

export default {
  title: 'Icons/Print',
  component: Print,
};

function Template(args) {
  return <Print {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
