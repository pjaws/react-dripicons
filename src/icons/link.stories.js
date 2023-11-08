import Link from './link';

export default {
  title: 'Icons/Link',
  component: Link,
};

function Template(args) {
  return <Link {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
