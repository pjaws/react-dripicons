import Pill from 'icons/pill';

export default {
  title: 'Icons/Pill',
  component: Pill,
};

const Template = (args) => <Pill {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
