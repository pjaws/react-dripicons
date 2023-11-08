import Store from './store';

export default {
  title: 'Icons/Store',
  component: Store,
};

function Template(args) {
  return <Store {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
