/* eslint-disable no-await-in-loop */
import fs from 'fs-extra';
import path from 'path';
import { globby } from 'globby';

const ICONS_PATH = '/Users/paul/Downloads/Dripicons';
const OUTPUT_DIR = path.join(process.cwd(), 'src', 'icons');

const clearAndUpper = (text) => text.replace(/-/, '').toUpperCase();

const kebabToPascal = (text) => {
  if (!text) return null;
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
};

const kebabToCamel = (text) => {
  if (!text) return null;
  return text.replace(/-\w/g, clearAndUpper);
};

const generateComponentName = (file) => kebabToPascal(file.replace('.svg', ''));

const generateFileName = (file) => kebabToCamel(file.replace('.svg', ''));

const generateReactComponent = (componentName, svgPath) => {
  const template = `
    import { forwardRef } from 'react';
    import PropTypes from 'prop-types';

    const ${componentName} = forwardRef(({ color, size, ...props }, ref) => (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        ${svgPath}
      </svg>
    ));

    ${componentName}.displayName = '${componentName}';

    ${componentName}.propTypes = {
      color: PropTypes.string,
      size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    ${componentName}.defaultProps = {
      color: 'currentColor',
      size: 24,
    };

    export default ${componentName};
  `;

  return template;
};

const writeReactComponent = async (fileName, data) => {
  await fs.writeFile(path.join(OUTPUT_DIR, `${fileName}.js`), data);
};

const generateStory = (componentName, fileName) => {
  const template = `
    import ${componentName} from 'icons/${fileName}';

    export default {
      title: 'Icons/${componentName}',
      component: ${componentName},
    };

    const Template = (args) => < ${componentName} {...args} />;

    export const Default = Template.bind({});
    Default.args = {
      size: 24,
      color: '#022A4D',
    };
  `;

  return template;
};

const writeStory = async (fileName, data) => {
  await fs.writeFile(path.join(OUTPUT_DIR, `${fileName}.stories.js`), data);
};

const generateExportString = (componentName, fileName) =>
  `export { default as ${componentName} } from './icons/${fileName}';\n`;

const main = async () => {
  const files = await globby('*.svg', { cwd: ICONS_PATH });
  const queue = [...files].sort();
  const failed = [];
  let exportString = '';

  while (queue.length) {
    const file = queue.shift();
    try {
      const data = await fs.readFile(path.join(ICONS_PATH, file));
      const svgPath = data.toString('utf8').split('\n')[1].replace('fill="#022A4D"', '');

      const componentName = generateComponentName(file);
      const fileName = generateFileName(file);

      const component = generateReactComponent(componentName, svgPath);
      await writeReactComponent(fileName, component);

      const story = generateStory(componentName, fileName);
      await writeStory(fileName, story);

      exportString += generateExportString(componentName, fileName);
    } catch (err) {
      console.error(err);
      failed.push(file);
    }
  }

  await fs.writeFile(path.join(OUTPUT_DIR, 'index.js'), exportString);
  console.log('failed', failed);
};

main();
