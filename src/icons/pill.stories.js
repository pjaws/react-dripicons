import Pill from './pill';

export default {
  title: 'Icons/Pill',
  component: Pill,
};

function Template(args) {
  return <Pill {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
