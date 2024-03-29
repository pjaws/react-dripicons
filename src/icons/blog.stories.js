import Blog from './blog';

export default {
  title: 'Icons/Blog',
  component: Blog,
};

function Template(args) {
  return <Blog {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
