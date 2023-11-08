import ChevronRight from './chevronRight';

export default {
  title: 'Icons/ChevronRight',
  component: ChevronRight,
};

function Template(args) {
  return <ChevronRight {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
