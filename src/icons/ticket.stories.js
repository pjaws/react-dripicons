import Ticket from 'icons/ticket';

export default {
  title: 'Icons/Ticket',
  component: Ticket,
};

const Template = (args) => <Ticket {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
