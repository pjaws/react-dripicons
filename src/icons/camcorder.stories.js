import Camcorder from './camcorder';

export default {
  title: 'Icons/Camcorder',
  component: Camcorder,
};

function Template(args) {
  return <Camcorder {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
