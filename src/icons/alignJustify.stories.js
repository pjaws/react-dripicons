import AlignJustify from './alignJustify';

export default {
  title: 'Icons/AlignJustify',
  component: AlignJustify,
};

function Template(args) {
  return <AlignJustify {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
