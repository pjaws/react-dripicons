import Todo from './todo';

export default {
  title: 'Icons/Todo',
  component: Todo,
};

function Template(args) {
  return <Todo {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
