import CloudDownload from './cloudDownload';

export default {
  title: 'Icons/CloudDownload',
  component: CloudDownload,
};

function Template(args) {
  return <CloudDownload {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
