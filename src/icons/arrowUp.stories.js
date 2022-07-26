import ArrowUp from 'icons/arrowUp';

export default {
  title: 'Icons/ArrowUp',
  component: ArrowUp,
};

const Template = (args) => <ArrowUp {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
