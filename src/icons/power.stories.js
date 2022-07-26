import Power from 'icons/power';

export default {
  title: 'Icons/Power',
  component: Power,
};

const Template = (args) => <Power {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
