import Cross from './cross';

export default {
  title: 'Icons/Cross',
  component: Cross,
};

function Template(args) {
  return <Cross {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
