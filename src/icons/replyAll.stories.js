import ReplyAll from 'icons/replyAll';

export default {
  title: 'Icons/ReplyAll',
  component: ReplyAll,
};

const Template = (args) => <ReplyAll {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
