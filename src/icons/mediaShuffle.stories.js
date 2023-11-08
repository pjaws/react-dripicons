import MediaShuffle from './mediaShuffle';

export default {
  title: 'Icons/MediaShuffle',
  component: MediaShuffle,
};

function Template(args) {
  return <MediaShuffle {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
