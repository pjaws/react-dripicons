import Experiment from 'icons/experiment';

export default {
  title: 'Icons/Experiment',
  component: Experiment,
};

const Template = (args) => <Experiment {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
