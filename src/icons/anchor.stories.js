import Anchor from './anchor';

export default {
  title: 'Icons/Anchor',
  component: Anchor,
};

function Template(args) {
  return <Anchor {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
