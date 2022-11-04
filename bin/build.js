/* eslint-disable no-await-in-loop, import/no-extraneous-dependencies */
const path = require('path');
const fs = require('fs-extra');
const globby = require('globby');

const ICONS_PATH = path.join(process.cwd(), 'node_modules', 'dripicons', 'SVG');
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

    const ${componentName} = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
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

const generateTest = (componentName, fileName) => {
  const template = `
    import { render } from '@testing-library/react';

    import ${componentName} from './${fileName}';

    describe('< ${componentName} />', () => {
      it('matches the snapshot', () => {
        const { container } = render(< ${componentName} />);

        expect(container).toMatchSnapshot();
      });

      it('sets the icon size', () => {
        const { container } = render(< ${componentName} size={32} />);

        expect(container).toMatchSnapshot();
        expect(container.firstChild).toHaveAttribute('width', '32');
        expect(container.firstChild).toHaveAttribute('height', '32');
      });

      it('sets the icon color', () => {
        const { container } = render(< ${componentName} color="#000" />);

        expect(container).toMatchSnapshot();
        expect(container.firstChild).toHaveAttribute('fill', '#000');
      });
    });
  `;

  return template;
};

const writeTest = async (fileName, data) => {
  await fs.writeFile(path.join(OUTPUT_DIR, `${fileName}.spec.js`), data);
};

const generateExportString = (componentName, fileName) =>
  `export { default as ${componentName} } from './icons/${fileName}';\n`;

const generateTypeDef = (componentName) => `export const ${componentName}: Icon;`;

const main = async () => {
  await fs.ensureDir(OUTPUT_DIR);
  const files = await globby('*.svg', { cwd: ICONS_PATH });
  const numFiles = files.length;
  const queue = [...files].sort();
  const failed = [];
  let exportString = '';
  let typeDefs = `/// <reference types="react" />
import { FC, SVGAttributes } from 'react';
export interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}
export type Icon = FC<IconProps>;
`;
  console.log(`Processing ${numFiles} files...`);
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

      const test = generateTest(componentName, fileName);
      await writeTest(fileName, test);

      exportString += generateExportString(componentName, fileName);
      typeDefs += generateTypeDef(componentName);
    } catch (err) {
      console.error(err);
      failed.push(file);
    }
  }

  await fs.writeFile(path.join(OUTPUT_DIR, 'index.js'), exportString);
  await fs.writeFile(path.join(OUTPUT_DIR, 'index.d.ts'), typeDefs);
  console.log(`Finished processing ${numFiles} files.`);
  if (failed.length) {
    console.log(`${failed.length} files failed:`, failed);
  }
};

main();
