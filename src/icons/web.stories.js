import Web from './web';

export default {
  title: 'Icons/Web',
  component: Web,
};

function Template(args) {
  return <Web {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
