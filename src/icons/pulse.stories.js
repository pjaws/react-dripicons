import Pulse from 'icons/pulse';

export default {
  title: 'Icons/Pulse',
  component: Pulse,
};

const Template = (args) => <Pulse {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
