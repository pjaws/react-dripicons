import Photo from './photo';

export default {
  title: 'Icons/Photo',
  component: Photo,
};

function Template(args) {
  return <Photo {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
