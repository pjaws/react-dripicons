import Inbox from './inbox';

export default {
  title: 'Icons/Inbox',
  component: Inbox,
};

function Template(args) {
  return <Inbox {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
