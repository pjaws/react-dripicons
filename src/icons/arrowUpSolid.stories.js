import ArrowUpSolid from 'icons/arrowUpSolid';

export default {
  title: 'Icons/ArrowUpSolid',
  component: ArrowUpSolid,
};

const Template = (args) => <ArrowUpSolid {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
