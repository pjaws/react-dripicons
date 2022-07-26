import PhotoGroup from 'icons/photoGroup';

export default {
  title: 'Icons/PhotoGroup',
  component: PhotoGroup,
};

const Template = (args) => <PhotoGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
