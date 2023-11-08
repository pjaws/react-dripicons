import Warning from './warning';

export default {
  title: 'Icons/Warning',
  component: Warning,
};

function Template(args) {
  return <Warning {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
