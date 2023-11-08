import Skip from './skip';

export default {
  title: 'Icons/Skip',
  component: Skip,
};

function Template(args) {
  return <Skip {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
