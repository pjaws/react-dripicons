import Crosshair from 'icons/crosshair';

export default {
  title: 'Icons/Crosshair',
  component: Crosshair,
};

const Template = (args) => <Crosshair {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
