import Trash from './trash';

export default {
  title: 'Icons/Trash',
  component: Trash,
};

function Template(args) {
  return <Trash {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
