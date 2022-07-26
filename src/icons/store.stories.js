import Store from 'icons/store';

export default {
  title: 'Icons/Store',
  component: Store,
};

const Template = (args) => <Store {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
