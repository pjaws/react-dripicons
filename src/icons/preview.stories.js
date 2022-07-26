import Preview from 'icons/preview';

export default {
  title: 'Icons/Preview',
  component: Preview,
};

const Template = (args) => <Preview {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
