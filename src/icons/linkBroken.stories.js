import LinkBroken from 'icons/linkBroken';

export default {
  title: 'Icons/LinkBroken',
  component: LinkBroken,
};

const Template = (args) => <LinkBroken {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
