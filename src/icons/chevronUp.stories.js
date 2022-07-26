import ChevronUp from 'icons/chevronUp';

export default {
  title: 'Icons/ChevronUp',
  component: ChevronUp,
};

const Template = (args) => <ChevronUp {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
