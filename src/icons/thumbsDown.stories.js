import ThumbsDown from 'icons/thumbsDown';

export default {
  title: 'Icons/ThumbsDown',
  component: ThumbsDown,
};

const Template = (args) => <ThumbsDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
