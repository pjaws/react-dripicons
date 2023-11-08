import Conversation from './conversation';

export default {
  title: 'Icons/Conversation',
  component: Conversation,
};

function Template(args) {
  return <Conversation {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
