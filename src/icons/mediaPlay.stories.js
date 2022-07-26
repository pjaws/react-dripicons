import MediaPlay from 'icons/mediaPlay';

export default {
  title: 'Icons/MediaPlay',
  component: MediaPlay,
};

const Template = (args) => <MediaPlay {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
