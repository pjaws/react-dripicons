import Jewel from 'icons/jewel';

export default {
  title: 'Icons/Jewel',
  component: Jewel,
};

const Template = (args) => <Jewel {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
