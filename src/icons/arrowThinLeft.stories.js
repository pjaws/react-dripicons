import ArrowThinLeft from './arrowThinLeft';

export default {
  title: 'Icons/ArrowThinLeft',
  component: ArrowThinLeft,
};

function Template(args) {
  return <ArrowThinLeft {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
