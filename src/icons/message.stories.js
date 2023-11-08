import Message from './message';

export default {
  title: 'Icons/Message',
  component: Message,
};

function Template(args) {
  return <Message {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
