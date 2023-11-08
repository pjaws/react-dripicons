import Tag from './tag';

export default {
  title: 'Icons/Tag',
  component: Tag,
};

function Template(args) {
  return <Tag {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
