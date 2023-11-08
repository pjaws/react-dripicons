import Dots2 from './dots2';

export default {
  title: 'Icons/Dots2',
  component: Dots2,
};

function Template(args) {
  return <Dots2 {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
