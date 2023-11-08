import ViewThumb from './viewThumb';

export default {
  title: 'Icons/ViewThumb',
  component: ViewThumb,
};

function Template(args) {
  return <ViewThumb {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
