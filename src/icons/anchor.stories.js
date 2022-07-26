import Anchor from 'icons/anchor';

export default {
  title: 'Icons/Anchor',
  component: Anchor,
};

const Template = (args) => <Anchor {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
