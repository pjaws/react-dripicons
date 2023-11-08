import Brush from './brush';

export default {
  title: 'Icons/Brush',
  component: Brush,
};

function Template(args) {
  return <Brush {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
