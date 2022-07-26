import Upload from 'icons/upload';

export default {
  title: 'Icons/Upload',
  component: Upload,
};

const Template = (args) => <Upload {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
