import Experiment from './experiment';

export default {
  title: 'Icons/Experiment',
  component: Experiment,
};

function Template(args) {
  return <Experiment {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
