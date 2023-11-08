import Pencil from './pencil';

export default {
  title: 'Icons/Pencil',
  component: Pencil,
};

function Template(args) {
  return <Pencil {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
