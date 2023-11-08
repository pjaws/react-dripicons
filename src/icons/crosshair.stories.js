import Crosshair from './crosshair';

export default {
  title: 'Icons/Crosshair',
  component: Crosshair,
};

function Template(args) {
  return <Crosshair {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
