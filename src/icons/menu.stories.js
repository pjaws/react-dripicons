import Menu from 'icons/menu';

export default {
  title: 'Icons/Menu',
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
