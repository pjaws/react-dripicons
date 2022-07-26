import Browser from 'icons/browser';

export default {
  title: 'Icons/Browser',
  component: Browser,
};

const Template = (args) => <Browser {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
