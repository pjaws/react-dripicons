import Expand2 from './expand2';

export default {
  title: 'Icons/Expand2',
  component: Expand2,
};

function Template(args) {
  return <Expand2 {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
