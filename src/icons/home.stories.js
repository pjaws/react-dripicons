import Home from 'icons/home';

export default {
  title: 'Icons/Home',
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
