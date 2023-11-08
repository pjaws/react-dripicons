import ArrowThinUp from './arrowThinUp';

export default {
  title: 'Icons/ArrowThinUp',
  component: ArrowThinUp,
};

function Template(args) {
  return <ArrowThinUp {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
