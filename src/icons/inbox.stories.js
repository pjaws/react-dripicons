import Inbox from 'icons/inbox';

export default {
  title: 'Icons/Inbox',
  component: Inbox,
};

const Template = (args) => <Inbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
