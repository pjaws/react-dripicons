import Graduation from 'icons/graduation';

export default {
  title: 'Icons/Graduation',
  component: Graduation,
};

const Template = (args) => <Graduation {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
