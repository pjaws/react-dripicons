import Reply from './reply';

export default {
  title: 'Icons/Reply',
  component: Reply,
};

function Template(args) {
  return <Reply {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
