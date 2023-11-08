import MediaRecord from './mediaRecord';

export default {
  title: 'Icons/MediaRecord',
  component: MediaRecord,
};

function Template(args) {
  return <MediaRecord {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
