import Bell from './bell';

export default {
  title: 'Icons/Bell',
  component: Bell,
};

function Template(args) {
  return <Bell {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
