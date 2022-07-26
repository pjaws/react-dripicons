import Bell from 'icons/bell';

export default {
  title: 'Icons/Bell',
  component: Bell,
};

const Template = (args) => <Bell {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
