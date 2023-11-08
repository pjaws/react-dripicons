import Enter from './enter';

export default {
  title: 'Icons/Enter',
  component: Enter,
};

function Template(args) {
  return <Enter {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
