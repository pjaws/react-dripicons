import GraphLine from './graphLine';

export default {
  title: 'Icons/GraphLine',
  component: GraphLine,
};

function Template(args) {
  return <GraphLine {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
