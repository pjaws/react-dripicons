import Vibrate from './vibrate';

export default {
  title: 'Icons/Vibrate',
  component: Vibrate,
};

function Template(args) {
  return <Vibrate {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
