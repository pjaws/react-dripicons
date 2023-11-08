import Dots3 from './dots3';

export default {
  title: 'Icons/Dots3',
  component: Dots3,
};

function Template(args) {
  return <Dots3 {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
