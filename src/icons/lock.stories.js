import Lock from 'icons/lock';

export default {
  title: 'Icons/Lock',
  component: Lock,
};

const Template = (args) => <Lock {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
