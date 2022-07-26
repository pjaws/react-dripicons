import MediaLoop from 'icons/mediaLoop';

export default {
  title: 'Icons/MediaLoop',
  component: MediaLoop,
};

const Template = (args) => <MediaLoop {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
