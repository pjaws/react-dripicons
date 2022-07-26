import Disc from 'icons/disc';

export default {
  title: 'Icons/Disc',
  component: Disc,
};

const Template = (args) => <Disc {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
