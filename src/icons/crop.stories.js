import Crop from './crop';

export default {
  title: 'Icons/Crop',
  component: Crop,
};

function Template(args) {
  return <Crop {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
