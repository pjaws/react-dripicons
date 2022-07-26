import MediaStop from 'icons/mediaStop';

export default {
  title: 'Icons/MediaStop',
  component: MediaStop,
};

const Template = (args) => <MediaStop {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
