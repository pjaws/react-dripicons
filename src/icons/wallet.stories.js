import Wallet from './wallet';

export default {
  title: 'Icons/Wallet',
  component: Wallet,
};

function Template(args) {
  return <Wallet {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
