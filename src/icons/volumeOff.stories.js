import VolumeOff from 'icons/volumeOff';

export default {
  title: 'Icons/VolumeOff',
  component: VolumeOff,
};

const Template = (args) => <VolumeOff {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
