import Meter from 'icons/meter';

export default {
  title: 'Icons/Meter',
  component: Meter,
};

const Template = (args) => <Meter {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
