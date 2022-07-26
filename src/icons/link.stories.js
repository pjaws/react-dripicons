import Link from 'icons/link';

export default {
  title: 'Icons/Link',
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
