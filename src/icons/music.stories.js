import Music from 'icons/music';

export default {
  title: 'Icons/Music',
  component: Music,
};

const Template = (args) => <Music {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
