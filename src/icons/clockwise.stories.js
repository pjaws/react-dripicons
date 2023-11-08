import Clockwise from './clockwise';

export default {
  title: 'Icons/Clockwise',
  component: Clockwise,
};

function Template(args) {
  return <Clockwise {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
