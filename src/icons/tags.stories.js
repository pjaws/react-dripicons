import Tags from 'icons/tags';

export default {
  title: 'Icons/Tags',
  component: Tags,
};

const Template = (args) => <Tags {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
