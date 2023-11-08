import User from './user';

export default {
  title: 'Icons/User',
  component: User,
};

function Template(args) {
  return <User {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
