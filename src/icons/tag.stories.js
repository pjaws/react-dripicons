import Tag from 'icons/tag';

export default {
  title: 'Icons/Tag',
  component: Tag,
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
