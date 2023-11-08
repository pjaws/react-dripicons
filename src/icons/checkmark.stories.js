import Checkmark from './checkmark';

export default {
  title: 'Icons/Checkmark',
  component: Checkmark,
};

function Template(args) {
  return <Checkmark {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
