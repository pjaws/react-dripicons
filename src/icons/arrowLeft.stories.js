import ArrowLeft from 'icons/arrowLeft';

export default {
  title: 'Icons/ArrowLeft',
  component: ArrowLeft,
};

const Template = (args) => <ArrowLeft {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
