import Clipboard from 'icons/clipboard';

export default {
  title: 'Icons/Clipboard',
  component: Clipboard,
};

const Template = (args) => <Clipboard {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
