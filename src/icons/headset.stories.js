import Headset from 'icons/headset';

export default {
  title: 'Icons/Headset',
  component: Headset,
};

const Template = (args) => <Headset {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
