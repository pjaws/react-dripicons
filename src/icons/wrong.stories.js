import Wrong from 'icons/wrong';

export default {
  title: 'Icons/Wrong',
  component: Wrong,
};

const Template = (args) => <Wrong {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
