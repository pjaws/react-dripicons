import Pin from './pin';

export default {
  title: 'Icons/Pin',
  component: Pin,
};

function Template(args) {
  return <Pin {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
