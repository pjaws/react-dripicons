import Loading from './loading';

export default {
  title: 'Icons/Loading',
  component: Loading,
};

function Template(args) {
  return <Loading {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
