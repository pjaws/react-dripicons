import DocumentEdit from 'icons/documentEdit';

export default {
  title: 'Icons/DocumentEdit',
  component: DocumentEdit,
};

const Template = (args) => <DocumentEdit {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
