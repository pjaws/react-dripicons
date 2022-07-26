import Blog from 'icons/blog';

export default {
  title: 'Icons/Blog',
  component: Blog,
};

const Template = (args) => <Blog {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
