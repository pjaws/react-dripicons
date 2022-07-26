import Phone from 'icons/phone';

export default {
  title: 'Icons/Phone',
  component: Phone,
};

const Template = (args) => <Phone {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
