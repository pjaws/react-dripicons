import ArrowThinRight from './arrowThinRight';

export default {
  title: 'Icons/ArrowThinRight',
  component: ArrowThinRight,
};

function Template(args) {
  return <ArrowThinRight {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
