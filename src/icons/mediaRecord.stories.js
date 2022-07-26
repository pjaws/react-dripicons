import MediaRecord from 'icons/mediaRecord';

export default {
  title: 'Icons/MediaRecord',
  component: MediaRecord,
};

const Template = (args) => <MediaRecord {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
