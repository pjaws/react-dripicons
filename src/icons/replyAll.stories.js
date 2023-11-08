import ReplyAll from './replyAll';

export default {
  title: 'Icons/ReplyAll',
  component: ReplyAll,
};

function Template(args) {
  return <ReplyAll {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
