import UserId from 'icons/userId';

export default {
  title: 'Icons/UserId',
  component: UserId,
};

const Template = (args) => <UserId {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
