import Question from 'icons/question';

export default {
  title: 'Icons/Question',
  component: Question,
};

const Template = (args) => <Question {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
