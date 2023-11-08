import ViewListLarge from './viewListLarge';

export default {
  title: 'Icons/ViewListLarge',
  component: ViewListLarge,
};

function Template(args) {
  return <ViewListLarge {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
