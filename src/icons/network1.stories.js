import Network1 from './network1';

export default {
  title: 'Icons/Network1',
  component: Network1,
};

function Template(args) {
  return <Network1 {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
