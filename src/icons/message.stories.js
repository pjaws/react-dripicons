import Message from 'icons/message';

export default {
  title: 'Icons/Message',
  component: Message,
};

const Template = (args) => <Message {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
