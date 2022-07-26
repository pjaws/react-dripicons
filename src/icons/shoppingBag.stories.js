import ShoppingBag from 'icons/shoppingBag';

export default {
  title: 'Icons/ShoppingBag',
  component: ShoppingBag,
};

const Template = (args) => <ShoppingBag {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
