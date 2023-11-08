import Contract from './contract';

export default {
  title: 'Icons/Contract',
  component: Contract,
};

function Template(args) {
  return <Contract {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
