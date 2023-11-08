import Jewel from './jewel';

export default {
  title: 'Icons/Jewel',
  component: Jewel,
};

function Template(args) {
  return <Jewel {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
