import Map from 'icons/map';

export default {
  title: 'Icons/Map',
  component: Map,
};

const Template = (args) => <Map {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
