import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SearchPage from './SearchPage';

// const Stack = createStackNavigator();

export default function App() {
  function onPress(){
    Alert.alert('Touchable opacity pressed');

  }

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="Home">
  //       <Stack.Screen name="Home" component={HomeScreen} />
  //       <Stack.Screen name="SearchPage" component={SearchPage} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );


// function HomeScreen({ navigation }) {
//   function onSearchPress() {
//     navigation.navigate('SearchPage');
//   }

  return (
    <View style={styles.container}>
      <View style={{marginTop: 100 }}>
      <Text style={styles.title}>Friends with Farms</Text>
      </View>
      
      
      <View style={{marginTop: 100 }}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Search</Text>
        </TouchableOpacity>
      </View>


      <View style={{marginTop: 100 }}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Farm Friends</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 100 }}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Our Mission</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 60,
    //justifyContent: 'center',
  },
  title: {
    alignItems: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'green'
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
});
