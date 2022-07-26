import Pin from 'icons/pin';

export default {
  title: 'Icons/Pin',
  component: Pin,
};

const Template = (args) => <Pin {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
