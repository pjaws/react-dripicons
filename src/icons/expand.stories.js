import Expand from './expand';

export default {
  title: 'Icons/Expand',
  component: Expand,
};

function Template(args) {
  return <Expand {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
