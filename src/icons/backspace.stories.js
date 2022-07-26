import Backspace from 'icons/backspace';

export default {
  title: 'Icons/Backspace',
  component: Backspace,
};

const Template = (args) => <Backspace {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
