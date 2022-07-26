import ChevronLeft from 'icons/chevronLeft';

export default {
  title: 'Icons/ChevronLeft',
  component: ChevronLeft,
};

const Template = (args) => <ChevronLeft {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
