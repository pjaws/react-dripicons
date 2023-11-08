import Hourglass from './hourglass';

export default {
  title: 'Icons/Hourglass',
  component: Hourglass,
};

function Template(args) {
  return <Hourglass {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
