import ZoomOut from './zoomOut';

export default {
  title: 'Icons/ZoomOut',
  component: ZoomOut,
};

function Template(args) {
  return <ZoomOut {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
