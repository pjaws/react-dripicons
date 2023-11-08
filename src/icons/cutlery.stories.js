import Cutlery from './cutlery';

export default {
  title: 'Icons/Cutlery',
  component: Cutlery,
};

function Template(args) {
  return <Cutlery {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
