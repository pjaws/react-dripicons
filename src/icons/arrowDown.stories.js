import ArrowDown from 'icons/arrowDown';

export default {
  title: 'Icons/ArrowDown',
  component: ArrowDown,
};

const Template = (args) => <ArrowDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
