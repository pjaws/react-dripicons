import Article from 'icons/article';

export default {
  title: 'Icons/Article',
  component: Article,
};

const Template = (args) => <Article {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
