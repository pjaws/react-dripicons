import Direction from './direction';

export default {
  title: 'Icons/Direction',
  component: Direction,
};

function Template(args) {
  return <Direction {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
