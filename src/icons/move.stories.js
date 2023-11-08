import Move from './move';

export default {
  title: 'Icons/Move',
  component: Move,
};

function Template(args) {
  return <Move {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
