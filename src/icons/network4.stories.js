import Network4 from './network4';

export default {
  title: 'Icons/Network4',
  component: Network4,
};

function Template(args) {
  return <Network4 {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
