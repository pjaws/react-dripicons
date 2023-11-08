import Meter from './meter';

export default {
  title: 'Icons/Meter',
  component: Meter,
};

function Template(args) {
  return <Meter {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
