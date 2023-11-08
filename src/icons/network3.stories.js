import Network3 from './network3';

export default {
  title: 'Icons/Network3',
  component: Network3,
};

function Template(args) {
  return <Network3 {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
