import FolderOpen from 'icons/folderOpen';

export default {
  title: 'Icons/FolderOpen',
  component: FolderOpen,
};

const Template = (args) => <FolderOpen {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
