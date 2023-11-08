import Music from './music';

export default {
  title: 'Icons/Music',
  component: Music,
};

function Template(args) {
  return <Music {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
