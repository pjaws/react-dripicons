import DocumentDelete from 'icons/documentDelete';

export default {
  title: 'Icons/DocumentDelete',
  component: DocumentDelete,
};

const Template = (args) => <DocumentDelete {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
