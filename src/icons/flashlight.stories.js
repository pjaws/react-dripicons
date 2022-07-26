import Flashlight from 'icons/flashlight';

export default {
  title: 'Icons/Flashlight',
  component: Flashlight,
};

const Template = (args) => <Flashlight {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
