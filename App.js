import * as React from 'react';
import { Button, View, Text,StyleSheet,ImageBackground, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Dimensions } from 'react-native'
import SignUp from './pages/SignUp';
import Homey from './pages/Homey';
import Houses from './pages/Houses';
import HouseDetail from './pages/HouseDetail';
import DoneSignUp from './pages/DoneSignUp';
import DashWelcome from './pages/DashWelcome';
import DashHouseDetails from './pages/DashHouseDetails';
import DashRoom from './pages/DashRoom';
import tw from 'twrnc';
import SignIn from './pages/SignIn';


const { width, height } = Dimensions.get('window');
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('./assets/house5.png')} resizeMode="cover" style={styles.image}>
      <View style={tw `m-4`}>
      <Text style={tw`text-white text-2xl leading-1.5`}>PEKUGARA</Text>
      <Text style={tw`text-white text-2xl leading-1.2`}>STUDENT OFF CAMPUS ACCOMMODATION</Text>
      <Text style={tw`text-[#ADADAD]  text-sm leading-1 mt-5`}>Find The Right Accommodation </Text>
      <Text style={tw`text-[#ADADAD] text-sm mb-16` }>At Just A Tap</Text>
      </View>
    <TouchableOpacity>
      <Text  onPress={() => navigation.navigate('Homey')} style={tw`bg-red-100 rounded-2xl mt- flex justify-center p-4 text-center font-bold text-4 text-white bg-[#E7994B]`}>Explore</Text>
  </TouchableOpacity>
      <TouchableOpacity>
      <Text  onPress={() => navigation.navigate('SignIn')} style={tw`bg-red-100 rounded-2xl mt-5 flex justify-center p-4 text-center text-4 text-white font-bold bg-[#E7994B] `}>Landlord SignUp</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
  );
}

// ... other code from the previous section

function DetailsScreen() {
  return (
    <View style={tw`bg-blue-100`}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="SignIn" options={{headerShown: false}} component={SignIn} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUp} />
        <Stack.Screen name="Homey" options={{headerShown: false}} component={Homey} />
        <Stack.Screen name="DoneSignUp" options={{headerShown: false}} component={DoneSignUp} />
        <Stack.Screen name="Houses" options={{headerShown: false}} component={Houses} />
        <Stack.Screen name="DashHouseDetails" options={{headerShown: false}} component={DashHouseDetails} />
        <Stack.Screen name="DashWelcome" options={{headerShown: false}} component={DashWelcome} />
        <Stack.Screen name="HouseDetail"  options={{headerShown: false}} component={HouseDetail} />
        <Stack.Screen name="DashRoom"  options={{headerShown: false}} component={DashRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 60,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    borderBottomColor: 50,
    marginTop: 20,

  },
});
export default App;