import Bluetooth from 'icons/bluetooth';

export default {
  title: 'Icons/Bluetooth',
  component: Bluetooth,
};

const Template = (args) => <Bluetooth {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
