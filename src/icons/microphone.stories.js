import Microphone from 'icons/microphone';

export default {
  title: 'Icons/Microphone',
  component: Microphone,
};

const Template = (args) => <Microphone {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
