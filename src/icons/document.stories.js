import Document from 'icons/document';

export default {
  title: 'Icons/Document',
  component: Document,
};

const Template = (args) => <Document {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
