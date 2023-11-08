import Feed from './feed';

export default {
  title: 'Icons/Feed',
  component: Feed,
};

function Template(args) {
  return <Feed {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
