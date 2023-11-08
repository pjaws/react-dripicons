import AlignRight from './alignRight';

export default {
  title: 'Icons/AlignRight',
  component: AlignRight,
};

function Template(args) {
  return <AlignRight {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
