import ArrowDownSolid from 'icons/arrowDownSolid';

export default {
  title: 'Icons/ArrowDownSolid',
  component: ArrowDownSolid,
};

const Template = (args) => <ArrowDownSolid {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
