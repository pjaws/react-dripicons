import Gaming from './gaming';

export default {
  title: 'Icons/Gaming',
  component: Gaming,
};

function Template(args) {
  return <Gaming {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
