import VolumeFull from 'icons/volumeFull';

export default {
  title: 'Icons/VolumeFull',
  component: VolumeFull,
};

const Template = (args) => <VolumeFull {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
