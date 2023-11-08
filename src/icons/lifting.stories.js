import Lifting from './lifting';

export default {
  title: 'Icons/Lifting',
  component: Lifting,
};

function Template(args) {
  return <Lifting {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
