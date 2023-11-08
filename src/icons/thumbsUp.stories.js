import ThumbsUp from './thumbsUp';

export default {
  title: 'Icons/ThumbsUp',
  component: ThumbsUp,
};

function Template(args) {
  return <ThumbsUp {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
