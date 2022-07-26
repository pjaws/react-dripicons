import Trophy from 'icons/trophy';

export default {
  title: 'Icons/Trophy',
  component: Trophy,
};

const Template = (args) => <Trophy {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
