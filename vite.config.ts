import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      // Example usage of environment variables
      port: Number(env.VITE_PORT) || 3000,  
    },
  };
});
