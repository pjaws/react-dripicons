import Preview from './preview';

export default {
  title: 'Icons/Preview',
  component: Preview,
};

function Template(args) {
  return <Preview {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
