import Camcorder from 'icons/camcorder';

export default {
  title: 'Icons/Camcorder',
  component: Camcorder,
};

const Template = (args) => <Camcorder {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
