import Flashlight from './flashlight';

export default {
  title: 'Icons/Flashlight',
  component: Flashlight,
};

function Template(args) {
  return <Flashlight {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
