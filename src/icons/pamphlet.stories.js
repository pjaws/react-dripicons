import Pamphlet from 'icons/pamphlet';

export default {
  title: 'Icons/Pamphlet',
  component: Pamphlet,
};

const Template = (args) => <Pamphlet {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
