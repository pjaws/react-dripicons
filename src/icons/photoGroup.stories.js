import PhotoGroup from './photoGroup';

export default {
  title: 'Icons/PhotoGroup',
  component: PhotoGroup,
};

function Template(args) {
  return <PhotoGroup {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
