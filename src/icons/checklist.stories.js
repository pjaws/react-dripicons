import Checklist from 'icons/checklist';

export default {
  title: 'Icons/Checklist',
  component: Checklist,
};

const Template = (args) => <Checklist {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
