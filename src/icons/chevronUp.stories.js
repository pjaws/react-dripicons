import ChevronUp from './chevronUp';

export default {
  title: 'Icons/ChevronUp',
  component: ChevronUp,
};

function Template(args) {
  return <ChevronUp {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
