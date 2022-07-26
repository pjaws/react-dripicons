import Mail from 'icons/mail';

export default {
  title: 'Icons/Mail',
  component: Mail,
};

const Template = (args) => <Mail {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
