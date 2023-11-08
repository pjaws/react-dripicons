import ChevronDown from './chevronDown';

export default {
  title: 'Icons/ChevronDown',
  component: ChevronDown,
};

function Template(args) {
  return <ChevronDown {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
