import ViewThumb from 'icons/viewThumb';

export default {
  title: 'Icons/ViewThumb',
  component: ViewThumb,
};

const Template = (args) => <ViewThumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
