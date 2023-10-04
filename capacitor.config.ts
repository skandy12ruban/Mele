import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'mele',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    "CapacitorCookies": {
      "enabled": true
    }
  }
};

export default config;
