const babel = require('rollup-plugin-babel');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'build/index.js',
    format: 'cjs',
  },
  external: ['react', 'prop-types', 'react/jsx-runtime'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
