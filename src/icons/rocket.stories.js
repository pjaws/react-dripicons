import Rocket from 'icons/rocket';

export default {
  title: 'Icons/Rocket',
  component: Rocket,
};

const Template = (args) => <Rocket {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
