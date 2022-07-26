import Basket from 'icons/basket';

export default {
  title: 'Icons/Basket',
  component: Basket,
};

const Template = (args) => <Basket {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
