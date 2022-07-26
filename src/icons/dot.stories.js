import Dot from 'icons/dot';

export default {
  title: 'Icons/Dot',
  component: Dot,
};

const Template = (args) => <Dot {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
