import ChevronDown from 'icons/chevronDown';

export default {
  title: 'Icons/ChevronDown',
  component: ChevronDown,
};

const Template = (args) => <ChevronDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
