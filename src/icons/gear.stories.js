import Gear from 'icons/gear';

export default {
  title: 'Icons/Gear',
  component: Gear,
};

const Template = (args) => <Gear {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
