import Stopwatch from './stopwatch';

export default {
  title: 'Icons/Stopwatch',
  component: Stopwatch,
};

function Template(args) {
  return <Stopwatch {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
