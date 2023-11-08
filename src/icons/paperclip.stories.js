import Paperclip from './paperclip';

export default {
  title: 'Icons/Paperclip',
  component: Paperclip,
};

function Template(args) {
  return <Paperclip {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
