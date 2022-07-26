import Duplicate from 'icons/duplicate';

export default {
  title: 'Icons/Duplicate',
  component: Duplicate,
};

const Template = (args) => <Duplicate {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
