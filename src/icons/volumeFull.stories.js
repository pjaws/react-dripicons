import VolumeFull from './volumeFull';

export default {
  title: 'Icons/VolumeFull',
  component: VolumeFull,
};

function Template(args) {
  return <VolumeFull {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
