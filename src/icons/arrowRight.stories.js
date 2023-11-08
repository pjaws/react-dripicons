import ArrowRight from './arrowRight';

export default {
  title: 'Icons/ArrowRight',
  component: ArrowRight,
};

function Template(args) {
  return <ArrowRight {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
