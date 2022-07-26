import Cart from 'icons/cart';

export default {
  title: 'Icons/Cart',
  component: Cart,
};

const Template = (args) => <Cart {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
