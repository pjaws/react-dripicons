import DeviceMobile from './deviceMobile';

export default {
  title: 'Icons/DeviceMobile',
  component: DeviceMobile,
};

function Template(args) {
  return <DeviceMobile {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
