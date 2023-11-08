import Home from './home';

export default {
  title: 'Icons/Home',
  component: Home,
};

function Template(args) {
  return <Home {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
