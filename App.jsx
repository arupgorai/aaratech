import {View, Text} from 'react-native';
import {Icon} from './src/atoms';

const App = () => {
  return (
    <View>
      <Text>Welcome to React Native!</Text>
      <Icon
        type="Entypo"
        name="attachment"
        style={{color: '#023595'}}
        size={16}
      />
    </View>
  );
};

export default App;
