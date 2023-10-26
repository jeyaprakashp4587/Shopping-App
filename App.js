import {StyleSheet, View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routing from './Routing';
import { DataExport} from './Export';

export default function App() {

  return (
    <NavigationContainer>
      <DataExport>
        <View style={styles.container}>
          <Routing />
        </View>
        </DataExport>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 5,
    marginTop: 35
    },
});
