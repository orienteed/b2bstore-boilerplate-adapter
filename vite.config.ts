import * as packageJson from './package.json';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'b2bstore-boilerplate-adapter',
      fileName: 'b2bstore-boilerplate-adapter',
    },
    rollupOptions: {
      external: Object.keys(packageJson.peerDependencies),
    },
  },
  plugins: [dts()],
});
