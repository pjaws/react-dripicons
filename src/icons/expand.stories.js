import Expand from 'icons/expand';

export default {
  title: 'Icons/Expand',
  component: Expand,
};

const Template = (args) => <Expand {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
