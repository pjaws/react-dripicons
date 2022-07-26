import ViewListLarge from 'icons/viewListLarge';

export default {
  title: 'Icons/ViewListLarge',
  component: ViewListLarge,
};

const Template = (args) => <ViewListLarge {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
