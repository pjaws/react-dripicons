import Microphone from './microphone';

export default {
  title: 'Icons/Microphone',
  component: Microphone,
};

function Template(args) {
  return <Microphone {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
