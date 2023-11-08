import Clipboard from './clipboard';

export default {
  title: 'Icons/Clipboard',
  component: Clipboard,
};

function Template(args) {
  return <Clipboard {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
