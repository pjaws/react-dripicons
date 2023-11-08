import Question from './question';

export default {
  title: 'Icons/Question',
  component: Question,
};

function Template(args) {
  return <Question {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
