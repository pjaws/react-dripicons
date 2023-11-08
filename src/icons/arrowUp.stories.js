import ArrowUp from './arrowUp';

export default {
  title: 'Icons/ArrowUp',
  component: ArrowUp,
};

function Template(args) {
  return <ArrowUp {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
