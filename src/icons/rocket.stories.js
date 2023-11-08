import Rocket from './rocket';

export default {
  title: 'Icons/Rocket',
  component: Rocket,
};

function Template(args) {
  return <Rocket {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
