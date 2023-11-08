import Duplicate from './duplicate';

export default {
  title: 'Icons/Duplicate',
  component: Duplicate,
};

function Template(args) {
  return <Duplicate {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
