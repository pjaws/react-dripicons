import Cloud from './cloud';

export default {
  title: 'Icons/Cloud',
  component: Cloud,
};

function Template(args) {
  return <Cloud {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
