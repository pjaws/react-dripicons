import Ticket from './ticket';

export default {
  title: 'Icons/Ticket',
  component: Ticket,
};

function Template(args) {
  return <Ticket {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
