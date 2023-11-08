import Wrong from './wrong';

export default {
  title: 'Icons/Wrong',
  component: Wrong,
};

function Template(args) {
  return <Wrong {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
