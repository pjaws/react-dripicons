import Wifi from './wifi';

export default {
  title: 'Icons/Wifi',
  component: Wifi,
};

function Template(args) {
  return <Wifi {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
