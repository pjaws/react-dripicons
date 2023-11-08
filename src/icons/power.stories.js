import Power from './power';

export default {
  title: 'Icons/Power',
  component: Power,
};

function Template(args) {
  return <Power {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
