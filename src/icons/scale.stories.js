import Scale from 'icons/scale';

export default {
  title: 'Icons/Scale',
  component: Scale,
};

const Template = (args) => <Scale {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
