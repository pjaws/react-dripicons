import Flag from './flag';

export default {
  title: 'Icons/Flag',
  component: Flag,
};

function Template(args) {
  return <Flag {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
