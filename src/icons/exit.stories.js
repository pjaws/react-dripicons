import Exit from './exit';

export default {
  title: 'Icons/Exit',
  component: Exit,
};

function Template(args) {
  return <Exit {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
