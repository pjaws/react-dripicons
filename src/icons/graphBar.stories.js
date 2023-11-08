import GraphBar from './graphBar';

export default {
  title: 'Icons/GraphBar',
  component: GraphBar,
};

function Template(args) {
  return <GraphBar {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
