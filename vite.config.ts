import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dtsPlugin from 'vite-plugin-dts'
import path from 'path'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dtsPlugin({ rollupTypes: true }), react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'ReactQuartz',
      fileName: 'index',
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
