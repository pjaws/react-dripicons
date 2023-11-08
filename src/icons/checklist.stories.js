import Checklist from './checklist';

export default {
  title: 'Icons/Checklist',
  component: Checklist,
};

function Template(args) {
  return <Checklist {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
