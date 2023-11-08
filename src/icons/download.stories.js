import Download from './download';

export default {
  title: 'Icons/Download',
  component: Download,
};

function Template(args) {
  return <Download {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
