import Wallet from 'icons/wallet';

export default {
  title: 'Icons/Wallet',
  component: Wallet,
};

const Template = (args) => <Wallet {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
