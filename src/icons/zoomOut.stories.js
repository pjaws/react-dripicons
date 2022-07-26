import ZoomOut from 'icons/zoomOut';

export default {
  title: 'Icons/ZoomOut',
  component: ZoomOut,
};

const Template = (args) => <ZoomOut {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
