import Cutlery from 'icons/cutlery';

export default {
  title: 'Icons/Cutlery',
  component: Cutlery,
};

const Template = (args) => <Cutlery {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
