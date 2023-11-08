import VolumeLow from './volumeLow';

export default {
  title: 'Icons/VolumeLow',
  component: VolumeLow,
};

function Template(args) {
  return <VolumeLow {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
