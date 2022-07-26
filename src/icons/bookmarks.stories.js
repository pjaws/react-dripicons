import Bookmarks from 'icons/bookmarks';

export default {
  title: 'Icons/Bookmarks',
  component: Bookmarks,
};

const Template = (args) => <Bookmarks {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
