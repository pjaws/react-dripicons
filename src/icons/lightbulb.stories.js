import Lightbulb from './lightbulb';

export default {
  title: 'Icons/Lightbulb',
  component: Lightbulb,
};

function Template(args) {
  return <Lightbulb {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
