import VolumeOff from './volumeOff';

export default {
  title: 'Icons/VolumeOff',
  component: VolumeOff,
};

function Template(args) {
  return <VolumeOff {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
