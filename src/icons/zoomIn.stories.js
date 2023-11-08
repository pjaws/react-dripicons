import ZoomIn from './zoomIn';

export default {
  title: 'Icons/ZoomIn',
  component: ZoomIn,
};

function Template(args) {
  return <ZoomIn {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
