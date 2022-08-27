import {
  StyleSheet,
  Text,
  TextStyle,
  useColorScheme, ViewStyle
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: ViewStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const welcomeTextStyle: TextStyle= {
    color: isDarkMode ? Colors.lighter : Colors.darker,
  }

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <Text style={welcomeTextStyle}>Welcome</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },

});

export default App;
