import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default {
  input: 'src/index.tsx', // Entry point of your library
  output: [
    {
      file: pkg.main, // Output file
      format: 'cjs', // CommonJS format
      sourcemap: true,
    },
    {
      file: pkg.module, // ES Module output
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Automatically externalize peerDependencies
    resolve(), // So Rollup can find external modules
    commonjs(), // So Rollup can convert CommonJS modules to ES6
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    postcss(), // To process CSS files
  ],
  external: ['react', 'react-dom'], // Mark react and react-dom as external
};