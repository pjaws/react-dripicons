import Search from './search';

export default {
  title: 'Icons/Search',
  component: Search,
};

function Template(args) {
  return <Search {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
