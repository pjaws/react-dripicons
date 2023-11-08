import CloudUpload from './cloudUpload';

export default {
  title: 'Icons/CloudUpload',
  component: CloudUpload,
};

function Template(args) {
  return <CloudUpload {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
