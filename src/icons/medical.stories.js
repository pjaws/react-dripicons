import Medical from 'icons/medical';

export default {
  title: 'Icons/Medical',
  component: Medical,
};

const Template = (args) => <Medical {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
