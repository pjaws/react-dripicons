import ShoppingBag from './shoppingBag';

export default {
  title: 'Icons/ShoppingBag',
  component: ShoppingBag,
};

function Template(args) {
  return <ShoppingBag {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
