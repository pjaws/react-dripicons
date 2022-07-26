import Stopwatch from 'icons/stopwatch';

export default {
  title: 'Icons/Stopwatch',
  component: Stopwatch,
};

const Template = (args) => <Stopwatch {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
