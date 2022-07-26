import Gaming from 'icons/gaming';

export default {
  title: 'Icons/Gaming',
  component: Gaming,
};

const Template = (args) => <Gaming {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
