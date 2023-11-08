import Trophy from './trophy';

export default {
  title: 'Icons/Trophy',
  component: Trophy,
};

function Template(args) {
  return <Trophy {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
