import LinkBroken from './linkBroken';

export default {
  title: 'Icons/LinkBroken',
  component: LinkBroken,
};

function Template(args) {
  return <LinkBroken {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
