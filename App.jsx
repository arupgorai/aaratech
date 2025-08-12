import {View, Text} from 'react-native';
import {Icon} from './src/atoms';
import {Input} from './src/components';
import SignupScreen from './src/screens/Signup';
import RootNavigator from './src/navigations/RootNavigator';
import {AppProvider} from './src/context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
};

export default App;
