import VolumeMedium from './volumeMedium';

export default {
  title: 'Icons/VolumeMedium',
  component: VolumeMedium,
};

function Template(args) {
  return <VolumeMedium {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
