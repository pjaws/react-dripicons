import Retweet from 'icons/retweet';

export default {
  title: 'Icons/Retweet',
  component: Retweet,
};

const Template = (args) => <Retweet {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
