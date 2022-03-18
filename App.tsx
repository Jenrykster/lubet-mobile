import { Provider } from 'react-redux';
import * as NavigationBar from 'expo-navigation-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { store } from './src/store/store';
import { useEffect, useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hideNavbar = async () => {
      setIsLoading(true);
      await NavigationBar.setBehaviorAsync('overlay-swipe');
      await NavigationBar.setVisibilityAsync('hidden');
      setIsLoading(false);
    };
    hideNavbar();
  }, []);
  return <Provider store={store}>{!isLoading && <AppNavigator />}</Provider>;
}
