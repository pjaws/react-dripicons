import ViewList from 'icons/viewList';

export default {
  title: 'Icons/ViewList',
  component: ViewList,
};

const Template = (args) => <ViewList {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
