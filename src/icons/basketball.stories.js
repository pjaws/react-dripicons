import Basketball from 'icons/basketball';

export default {
  title: 'Icons/Basketball',
  component: Basketball,
};

const Template = (args) => <Basketball {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
