import BrowserUpload from 'icons/browserUpload';

export default {
  title: 'Icons/BrowserUpload',
  component: BrowserUpload,
};

const Template = (args) => <BrowserUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
