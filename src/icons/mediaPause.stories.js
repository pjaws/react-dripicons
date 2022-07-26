import MediaPause from 'icons/mediaPause';

export default {
  title: 'Icons/MediaPause',
  component: MediaPause,
};

const Template = (args) => <MediaPause {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
