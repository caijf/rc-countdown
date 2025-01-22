import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: 'src/index.tsx',
  external: ['react', 'tslib', 'countdown-pro', 'rc-hooks'],
  output: [
    {
      format: 'es',
      file: 'dist/index.esm.js'
    },
    {
      format: 'cjs',
      file: 'dist/index.cjs.js'
    }
  ],
  plugins: [
    commonjs(),
    resolve(),
    typescript({
      tsconfig: './tsconfig.build.json'
    })
  ]
});
