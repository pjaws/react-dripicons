import Bold from './bold';

export default {
  title: 'Icons/Bold',
  component: Bold,
};

function Template(args) {
  return <Bold {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
