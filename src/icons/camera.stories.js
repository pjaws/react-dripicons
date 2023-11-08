import Camera from './camera';

export default {
  title: 'Icons/Camera',
  component: Camera,
};

function Template(args) {
  return <Camera {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
