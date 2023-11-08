import ArrowLeft from './arrowLeft';

export default {
  title: 'Icons/ArrowLeft',
  component: ArrowLeft,
};

function Template(args) {
  return <ArrowLeft {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
