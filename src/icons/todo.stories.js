import Todo from 'icons/todo';

export default {
  title: 'Icons/Todo',
  component: Todo,
};

const Template = (args) => <Todo {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
