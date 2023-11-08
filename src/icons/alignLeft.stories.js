import AlignLeft from './alignLeft';

export default {
  title: 'Icons/AlignLeft',
  component: AlignLeft,
};

function Template(args) {
  return <AlignLeft {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
