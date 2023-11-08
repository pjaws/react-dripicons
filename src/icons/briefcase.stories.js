import Briefcase from './briefcase';

export default {
  title: 'Icons/Briefcase',
  component: Briefcase,
};

function Template(args) {
  return <Briefcase {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
