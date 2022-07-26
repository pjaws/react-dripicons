import Suitcase from 'icons/suitcase';

export default {
  title: 'Icons/Suitcase',
  component: Suitcase,
};

const Template = (args) => <Suitcase {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
