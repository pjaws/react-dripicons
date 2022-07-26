import Cross from 'icons/cross';

export default {
  title: 'Icons/Cross',
  component: Cross,
};

const Template = (args) => <Cross {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
