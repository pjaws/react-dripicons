import Folder from 'icons/folder';

export default {
  title: 'Icons/Folder',
  component: Folder,
};

const Template = (args) => <Folder {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 24,
  color: '#022A4D',
};
