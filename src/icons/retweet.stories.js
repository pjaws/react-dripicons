import Retweet from './retweet';

export default {
  title: 'Icons/Retweet',
  component: Retweet,
};

function Template(args) {
  return <Retweet {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
