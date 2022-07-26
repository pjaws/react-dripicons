import Search from 'icons/search';

export default {
  title: 'Icons/Search',
  component: Search,
};

const Template = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
