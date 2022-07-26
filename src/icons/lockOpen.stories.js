import LockOpen from 'icons/lockOpen';

export default {
  title: 'Icons/LockOpen',
  component: LockOpen,
};

const Template = (args) => <LockOpen {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
