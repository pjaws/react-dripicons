import BrowserUpload from './browserUpload';

export default {
  title: 'Icons/BrowserUpload',
  component: BrowserUpload,
};

function Template(args) {
  return <BrowserUpload {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
