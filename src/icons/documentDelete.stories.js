import DocumentDelete from './documentDelete';

export default {
  title: 'Icons/DocumentDelete',
  component: DocumentDelete,
};

function Template(args) {
  return <DocumentDelete {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
