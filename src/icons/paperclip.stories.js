import Paperclip from 'icons/paperclip';

export default {
  title: 'Icons/Paperclip',
  component: Paperclip,
};

const Template = (args) => <Paperclip {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
