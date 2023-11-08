import ArrowUpSolid from './arrowUpSolid';

export default {
  title: 'Icons/ArrowUpSolid',
  component: ArrowUpSolid,
};

function Template(args) {
  return <ArrowUpSolid {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
