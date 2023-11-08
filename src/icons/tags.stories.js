import Tags from './tags';

export default {
  title: 'Icons/Tags',
  component: Tags,
};

function Template(args) {
  return <Tags {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
