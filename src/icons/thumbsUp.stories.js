import ThumbsUp from 'icons/thumbsUp';

export default {
  title: 'Icons/ThumbsUp',
  component: ThumbsUp,
};

const Template = (args) => <ThumbsUp {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
