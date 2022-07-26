import ChevronRight from 'icons/chevronRight';

export default {
  title: 'Icons/ChevronRight',
  component: ChevronRight,
};

const Template = (args) => <ChevronRight {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
