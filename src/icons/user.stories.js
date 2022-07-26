import User from 'icons/user';

export default {
  title: 'Icons/User',
  component: User,
};

const Template = (args) => <User {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
