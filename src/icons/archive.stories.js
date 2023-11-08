import Archive from './archive';

export default {
  title: 'Icons/Archive',
  component: Archive,
};

function Template(args) {
  return <Archive {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
