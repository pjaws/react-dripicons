import GraphPie from 'icons/graphPie';

export default {
  title: 'Icons/GraphPie',
  component: GraphPie,
};

const Template = (args) => <GraphPie {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
