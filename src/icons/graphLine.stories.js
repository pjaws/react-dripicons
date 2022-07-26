import GraphLine from 'icons/graphLine';

export default {
  title: 'Icons/GraphLine',
  component: GraphLine,
};

const Template = (args) => <GraphLine {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
