import TagDelete from 'icons/tagDelete';

export default {
  title: 'Icons/TagDelete',
  component: TagDelete,
};

const Template = (args) => <TagDelete {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
