import MediaStop from './mediaStop';

export default {
  title: 'Icons/MediaStop',
  component: MediaStop,
};

function Template(args) {
  return <MediaStop {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
