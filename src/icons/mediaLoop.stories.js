import MediaLoop from './mediaLoop';

export default {
  title: 'Icons/MediaLoop',
  component: MediaLoop,
};

function Template(args) {
  return <MediaLoop {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
