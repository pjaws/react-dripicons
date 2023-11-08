import Network2 from './network2';

export default {
  title: 'Icons/Network2',
  component: Network2,
};

function Template(args) {
  return <Network2 {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
