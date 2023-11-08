import Basket from './basket';

export default {
  title: 'Icons/Basket',
  component: Basket,
};

function Template(args) {
  return <Basket {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
