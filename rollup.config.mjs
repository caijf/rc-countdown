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
      file: 'es/index.js'
    },
    {
      format: 'cjs',
      file: 'lib/index.js'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json'
    })
  ]
});
