import AlignCenter from './alignCenter';

export default {
  title: 'Icons/AlignCenter',
  component: AlignCenter,
};

function Template(args) {
  return <AlignCenter {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
