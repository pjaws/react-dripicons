import List from './list';

export default {
  title: 'Icons/List',
  component: List,
};

function Template(args) {
  return <List {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
