import ThumbsDown from './thumbsDown';

export default {
  title: 'Icons/ThumbsDown',
  component: ThumbsDown,
};

function Template(args) {
  return <ThumbsDown {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
