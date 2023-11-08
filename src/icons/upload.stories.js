import Upload from './upload';

export default {
  title: 'Icons/Upload',
  component: Upload,
};

function Template(args) {
  return <Upload {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
