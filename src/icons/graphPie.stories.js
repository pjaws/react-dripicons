import GraphPie from './graphPie';

export default {
  title: 'Icons/GraphPie',
  component: GraphPie,
};

function Template(args) {
  return <GraphPie {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
