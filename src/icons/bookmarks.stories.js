import Bookmarks from './bookmarks';

export default {
  title: 'Icons/Bookmarks',
  component: Bookmarks,
};

function Template(args) {
  return <Bookmarks {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
