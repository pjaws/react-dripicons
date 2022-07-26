import Reply from 'icons/reply';

export default {
  title: 'Icons/Reply',
  component: Reply,
};

const Template = (args) => <Reply {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
