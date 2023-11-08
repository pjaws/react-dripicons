import MediaNext from './mediaNext';

export default {
  title: 'Icons/MediaNext',
  component: MediaNext,
};

function Template(args) {
  return <MediaNext {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
