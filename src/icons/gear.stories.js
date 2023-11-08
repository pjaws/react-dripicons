import Gear from './gear';

export default {
  title: 'Icons/Gear',
  component: Gear,
};

function Template(args) {
  return <Gear {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
