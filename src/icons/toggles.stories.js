import Toggles from 'icons/toggles';

export default {
  title: 'Icons/Toggles',
  component: Toggles,
};

const Template = (args) => <Toggles {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
