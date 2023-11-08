import Disc from './disc';

export default {
  title: 'Icons/Disc',
  component: Disc,
};

function Template(args) {
  return <Disc {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
