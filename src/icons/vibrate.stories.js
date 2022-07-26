import Vibrate from 'icons/vibrate';

export default {
  title: 'Icons/Vibrate',
  component: Vibrate,
};

const Template = (args) => <Vibrate {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
