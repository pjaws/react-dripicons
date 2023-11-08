import Italic from './italic';

export default {
  title: 'Icons/Italic',
  component: Italic,
};

function Template(args) {
  return <Italic {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
