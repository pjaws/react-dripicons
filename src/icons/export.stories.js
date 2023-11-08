import Export from './export';

export default {
  title: 'Icons/Export',
  component: Export,
};

function Template(args) {
  return <Export {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
