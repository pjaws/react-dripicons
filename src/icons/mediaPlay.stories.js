import MediaPlay from './mediaPlay';

export default {
  title: 'Icons/MediaPlay',
  component: MediaPlay,
};

function Template(args) {
  return <MediaPlay {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
