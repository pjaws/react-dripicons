import Network5 from './network5';

export default {
  title: 'Icons/Network5',
  component: Network5,
};

function Template(args) {
  return <Network5 {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
