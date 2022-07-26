import Direction from 'icons/direction';

export default {
  title: 'Icons/Direction',
  component: Direction,
};

const Template = (args) => <Direction {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
