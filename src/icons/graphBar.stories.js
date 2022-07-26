import GraphBar from 'icons/graphBar';

export default {
  title: 'Icons/GraphBar',
  component: GraphBar,
};

const Template = (args) => <GraphBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
