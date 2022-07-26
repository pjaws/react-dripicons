import Checkmark from 'icons/checkmark';

export default {
  title: 'Icons/Checkmark',
  component: Checkmark,
};

const Template = (args) => <Checkmark {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
