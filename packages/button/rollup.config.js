import svelte from 'rollup-plugin-svelte';
import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase());

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.module, 'format': 'es' },
    { file: pkg.main, 'format': 'umd', name }
  ],
  plugins: [
    svelte({
      cascade: false,
      store: true,
      customElement: true
    }),
    resolve()
  ]
};
