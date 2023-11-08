import FolderOpen from './folderOpen';

export default {
  title: 'Icons/FolderOpen',
  component: FolderOpen,
};

function Template(args) {
  return <FolderOpen {...args} />
}

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
