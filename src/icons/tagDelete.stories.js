import TagDelete from './tagDelete';

export default {
  title: 'Icons/TagDelete',
  component: TagDelete,
};

function Template(args) {
  return <TagDelete {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
