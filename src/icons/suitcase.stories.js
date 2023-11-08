import Suitcase from './suitcase';

export default {
  title: 'Icons/Suitcase',
  component: Suitcase,
};

function Template(args) {
  return <Suitcase {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
