import Flag from 'icons/flag';

export default {
  title: 'Icons/Flag',
  component: Flag,
};

const Template = (args) => <Flag {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
