import Bold from 'icons/bold';

export default {
  title: 'Icons/Bold',
  component: Bold,
};

const Template = (args) => <Bold {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
