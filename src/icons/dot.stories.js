import Dot from './dot';

export default {
  title: 'Icons/Dot',
  component: Dot,
};

function Template(args) {
  return <Dot {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
