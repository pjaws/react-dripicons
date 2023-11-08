import Folder from './folder';

export default {
  title: 'Icons/Folder',
  component: Folder,
};

function Template(args) {
  return <Folder {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
