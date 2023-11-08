import Toggles from './toggles';

export default {
  title: 'Icons/Toggles',
  component: Toggles,
};

function Template(args) {
  return <Toggles {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
