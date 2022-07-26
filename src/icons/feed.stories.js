import Feed from 'icons/feed';

export default {
  title: 'Icons/Feed',
  component: Feed,
};

const Template = (args) => <Feed {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
