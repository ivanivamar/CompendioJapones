import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.compendiojapones.ivanov',
  appName: 'Compendio Japones',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
