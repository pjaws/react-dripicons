import UserId from './userId';

export default {
  title: 'Icons/UserId',
  component: UserId,
};

function Template(args) {
  return <UserId {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
