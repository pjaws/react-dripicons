import VolumeMedium from 'icons/volumeMedium';

export default {
  title: 'Icons/VolumeMedium',
  component: VolumeMedium,
};

const Template = (args) => <VolumeMedium {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
