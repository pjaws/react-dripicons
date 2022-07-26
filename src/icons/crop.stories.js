import Crop from 'icons/crop';

export default {
  title: 'Icons/Crop',
  component: Crop,
};

const Template = (args) => <Crop {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
