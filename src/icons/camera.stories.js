import Camera from 'icons/camera';

export default {
  title: 'Icons/Camera',
  component: Camera,
};

const Template = (args) => <Camera {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
