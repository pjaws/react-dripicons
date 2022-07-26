import Help from 'icons/help';

export default {
  title: 'Icons/Help',
  component: Help,
};

const Template = (args) => <Help {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
