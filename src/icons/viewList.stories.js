import ViewList from './viewList';

export default {
  title: 'Icons/ViewList',
  component: ViewList,
};

function Template(args) {
  return <ViewList {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
