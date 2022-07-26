import Dots2 from 'icons/dots2';

export default {
  title: 'Icons/Dots2',
  component: Dots2,
};

const Template = (args) => <Dots2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
