import MediaPrevious from 'icons/mediaPrevious';

export default {
  title: 'Icons/MediaPrevious',
  component: MediaPrevious,
};

const Template = (args) => <MediaPrevious {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
