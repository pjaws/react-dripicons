import Menu from './menu';

export default {
  title: 'Icons/Menu',
  component: Menu,
};

function Template(args) {
  return <Menu {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
