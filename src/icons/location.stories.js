import Location from './location';

export default {
  title: 'Icons/Location',
  component: Location,
};

function Template(args) {
  return <Location {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
