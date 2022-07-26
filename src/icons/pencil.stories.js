import Pencil from 'icons/pencil';

export default {
  title: 'Icons/Pencil',
  component: Pencil,
};

const Template = (args) => <Pencil {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
