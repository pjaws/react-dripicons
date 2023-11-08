import Medical from './medical';

export default {
  title: 'Icons/Medical',
  component: Medical,
};

function Template(args) {
  return <Medical {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
