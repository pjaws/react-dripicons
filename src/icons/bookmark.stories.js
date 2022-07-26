import Bookmark from 'icons/bookmark';

export default {
  title: 'Icons/Bookmark',
  component: Bookmark,
};

const Template = (args) => <Bookmark {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
