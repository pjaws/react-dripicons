import VolumeLow from 'icons/volumeLow';

export default {
  title: 'Icons/VolumeLow',
  component: VolumeLow,
};

const Template = (args) => <VolumeLow {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
