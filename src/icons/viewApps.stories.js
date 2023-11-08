import ViewApps from './viewApps';

export default {
  title: 'Icons/ViewApps',
  component: ViewApps,
};

function Template(args) {
  return <ViewApps {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
