import ArrowThinDown from './arrowThinDown';

export default {
  title: 'Icons/ArrowThinDown',
  component: ArrowThinDown,
};

function Template(args) {
  return <ArrowThinDown {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
