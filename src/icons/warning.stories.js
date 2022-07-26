import Warning from 'icons/warning';

export default {
  title: 'Icons/Warning',
  component: Warning,
};

const Template = (args) => <Warning {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
