import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/web',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    },
    server: {
        // Handle client-side routing in development
        historyApiFallback: {
            rewrites: [
                { from: /^\/web\/.*$/, to: '/web/index.html' }
            ]
        }
    },
    preview: {
        // Handle client-side routing in preview mode
        historyApiFallback: {
            rewrites: [
                { from: /^\/web\/.*$/, to: '/web/index.html' }
            ]
        }
    }
});
