import Map from './map';

export default {
  title: 'Icons/Map',
  component: Map,
};

function Template(args) {
  return <Map {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
