import Plus from './plus';

export default {
  title: 'Icons/Plus',
  component: Plus,
};

function Template(args) {
  return <Plus {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
