import MediaPause from './mediaPause';

export default {
  title: 'Icons/MediaPause',
  component: MediaPause,
};

function Template(args) {
  return <MediaPause {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
