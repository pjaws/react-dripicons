import LockOpen from './lockOpen';

export default {
  title: 'Icons/LockOpen',
  component: LockOpen,
};

function Template(args) {
  return <LockOpen {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
