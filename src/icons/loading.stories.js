import Loading from 'icons/loading';

export default {
  title: 'Icons/Loading',
  component: Loading,
};

const Template = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
