import Article from './article';

export default {
  title: 'Icons/Article',
  component: Article,
};

function Template(args) {
  return <Article {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
