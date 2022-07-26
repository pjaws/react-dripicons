import List from 'icons/list';

export default {
  title: 'Icons/List',
  component: List,
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
