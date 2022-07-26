import Location from 'icons/location';

export default {
  title: 'Icons/Location',
  component: Location,
};

const Template = (args) => <Location {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
