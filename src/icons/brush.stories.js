import Brush from 'icons/brush';

export default {
  title: 'Icons/Brush',
  component: Brush,
};

const Template = (args) => <Brush {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
