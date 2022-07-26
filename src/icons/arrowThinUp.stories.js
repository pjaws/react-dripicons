import ArrowThinUp from 'icons/arrowThinUp';

export default {
  title: 'Icons/ArrowThinUp',
  component: ArrowThinUp,
};

const Template = (args) => <ArrowThinUp {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
