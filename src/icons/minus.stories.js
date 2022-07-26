import Minus from 'icons/minus';

export default {
  title: 'Icons/Minus',
  component: Minus,
};

const Template = (args) => <Minus {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
