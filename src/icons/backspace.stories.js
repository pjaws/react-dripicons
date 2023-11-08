import Backspace from './backspace';

export default {
  title: 'Icons/Backspace',
  component: Backspace,
};

function Template(args) {
  return <Backspace {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
