import Monitor from 'icons/monitor';

export default {
  title: 'Icons/Monitor',
  component: Monitor,
};

const Template = (args) => <Monitor {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
