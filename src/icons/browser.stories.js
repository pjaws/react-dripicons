import Browser from './browser';

export default {
  title: 'Icons/Browser',
  component: Browser,
};

function Template(args) {
  return <Browser {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
