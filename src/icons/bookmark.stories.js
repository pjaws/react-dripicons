import Bookmark from './bookmark';

export default {
  title: 'Icons/Bookmark',
  component: Bookmark,
};

function Template(args) {
  return <Bookmark {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
