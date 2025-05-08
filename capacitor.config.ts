
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.6f6db6c074854cbda22665051a42ebd2',
  appName: 'my-school-hub-today',
  webDir: 'dist',
  server: {
    url: "https://6f6db6c0-7485-4cbd-a226-65051a42ebd2.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#FFFFFF",
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true
    }
  }
};

export default config;
