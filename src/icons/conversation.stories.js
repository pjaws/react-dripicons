import Conversation from 'icons/conversation';

export default {
  title: 'Icons/Conversation',
  component: Conversation,
};

const Template = (args) => <Conversation {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
