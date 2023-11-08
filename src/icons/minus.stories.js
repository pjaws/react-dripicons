import Minus from './minus';

export default {
  title: 'Icons/Minus',
  component: Minus,
};

function Template(args) {
  return <Minus {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
