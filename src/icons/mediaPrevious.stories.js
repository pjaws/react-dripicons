import MediaPrevious from './mediaPrevious';

export default {
  title: 'Icons/MediaPrevious',
  component: MediaPrevious,
};

function Template(args) {
  return <MediaPrevious {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
