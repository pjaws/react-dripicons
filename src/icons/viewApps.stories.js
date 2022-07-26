import ViewApps from 'icons/viewApps';

export default {
  title: 'Icons/ViewApps',
  component: ViewApps,
};

const Template = (args) => <ViewApps {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
