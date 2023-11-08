import DocumentRemove from './documentRemove';

export default {
  title: 'Icons/DocumentRemove',
  component: DocumentRemove,
};

function Template(args) {
  return <DocumentRemove {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
