import Pamphlet from './pamphlet';

export default {
  title: 'Icons/Pamphlet',
  component: Pamphlet,
};

function Template(args) {
  return <Pamphlet {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
