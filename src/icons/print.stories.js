import Print from 'icons/print';

export default {
  title: 'Icons/Print',
  component: Print,
};

const Template = (args) => <Print {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
