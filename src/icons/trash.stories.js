import Trash from 'icons/trash';

export default {
  title: 'Icons/Trash',
  component: Trash,
};

const Template = (args) => <Trash {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
