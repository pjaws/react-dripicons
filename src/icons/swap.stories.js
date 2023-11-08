import Swap from './swap';

export default {
  title: 'Icons/Swap',
  component: Swap,
};

function Template(args) {
  return <Swap {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
