import Help from './help';

export default {
  title: 'Icons/Help',
  component: Help,
};

function Template(args) {
  return <Help {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
