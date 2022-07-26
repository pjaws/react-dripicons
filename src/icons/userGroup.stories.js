import UserGroup from 'icons/userGroup';

export default {
  title: 'Icons/UserGroup',
  component: UserGroup,
};

const Template = (args) => <UserGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
