import { defineConfig, defineRunnerConfig } from 'wxt';
import react from '@vitejs/plugin-react';

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: 'Memoria',
    description: 'Memoria is a browser extension that helps you remember to revisit websites.',
    version: '0.0.1',
    permissions: ['activeTab', 'tabs'],
    host_permissions: ['*://*/*'],
  },
  vite: () => ({
    plugins: [react()],
  }),
  outDir: 'dist',
});
