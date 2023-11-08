import Graduation from './graduation';

export default {
  title: 'Icons/Graduation',
  component: Graduation,
};

function Template(args) {
  return <Graduation {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
