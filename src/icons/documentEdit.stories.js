import DocumentEdit from './documentEdit';

export default {
  title: 'Icons/DocumentEdit',
  component: DocumentEdit,
};

function Template(args) {
  return <DocumentEdit {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
