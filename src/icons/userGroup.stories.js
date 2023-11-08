import UserGroup from './userGroup';

export default {
  title: 'Icons/UserGroup',
  component: UserGroup,
};

function Template(args) {
  return <UserGroup {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
