import Copy from 'icons/copy';

export default {
  title: 'Icons/Copy',
  component: Copy,
};

const Template = (args) => <Copy {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
