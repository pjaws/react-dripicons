import Plus from 'icons/plus';

export default {
  title: 'Icons/Plus',
  component: Plus,
};

const Template = (args) => <Plus {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
