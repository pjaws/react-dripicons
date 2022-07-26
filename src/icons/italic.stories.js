import Italic from 'icons/italic';

export default {
  title: 'Icons/Italic',
  component: Italic,
};

const Template = (args) => <Italic {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
