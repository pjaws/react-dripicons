import Copy from './copy';

export default {
  title: 'Icons/Copy',
  component: Copy,
};

function Template(args) {
  return <Copy {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
