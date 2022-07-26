import Briefcase from 'icons/briefcase';

export default {
  title: 'Icons/Briefcase',
  component: Briefcase,
};

const Template = (args) => <Briefcase {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
