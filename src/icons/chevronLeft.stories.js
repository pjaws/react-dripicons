import ChevronLeft from './chevronLeft';

export default {
  title: 'Icons/ChevronLeft',
  component: ChevronLeft,
};

function Template(args) {
  return <ChevronLeft {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
