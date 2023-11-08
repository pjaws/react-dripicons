import Contract2 from './contract2';

export default {
  title: 'Icons/Contract2',
  component: Contract2,
};

function Template(args) {
  return <Contract2 {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
