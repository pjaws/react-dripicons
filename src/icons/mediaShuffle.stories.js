import MediaShuffle from 'icons/mediaShuffle';

export default {
  title: 'Icons/MediaShuffle',
  component: MediaShuffle,
};

const Template = (args) => <MediaShuffle {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
