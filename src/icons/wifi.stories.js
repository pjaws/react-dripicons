import Wifi from 'icons/wifi';

export default {
  title: 'Icons/Wifi',
  component: Wifi,
};

const Template = (args) => <Wifi {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
