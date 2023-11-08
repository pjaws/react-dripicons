import Cart from './cart';

export default {
  title: 'Icons/Cart',
  component: Cart,
};

function Template(args) {
  return <Cart {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
