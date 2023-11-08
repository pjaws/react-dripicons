import ArrowDownSolid from './arrowDownSolid';

export default {
  title: 'Icons/ArrowDownSolid',
  component: ArrowDownSolid,
};

function Template(args) {
  return <ArrowDownSolid {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
