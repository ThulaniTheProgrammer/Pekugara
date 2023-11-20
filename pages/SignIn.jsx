import React from 'react'
import { BubblingEventHandler } from 'react-native/Libraries/Types/CodegenTypes'
import ButtonComp from '../components/Button'
import { Image, StyleSheet,Text,TextInput,TouchableOpacity,View} from 'react-native' 
import tw from 'twrnc'
import TextField from '../components/TextField'
import SignUp from './SignUp'
import CustomHeader from '../components/Header'
import { Entypo } from '@expo/vector-icons';
import Houses from './Houses'
 


   

export default function SignIn({ navigation }) {
 
  return (
<View style={tw` flex-1 relative`}>
  
     <View>
      <View style={tw`h-80 `} >
    <Image source={require('../assets/house5.png')} resizeMode="cover" style={tw`h-120`}/>
    {
          <TouchableOpacity onPress={() => navigation.goBack()} style={tw`bg-white rounded-full p-2`}>
          <Entypo name="chevron-left" size={24} color="blue" style={tw`h-80 relative top-2`} />
          </TouchableOpacity>
        }
        </View>
    <View style={tw`bg-white h-full  rounded-3xl top-10 px-4`} >
        <View style={tw`flex justify-center items-center`}>
        {
          <TouchableOpacity onPress={() => navigation.goBack()} style={tw`bg-[#E7994B] mt-1 rounded-lg p-2`}>
          <Entypo name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
        }
       
       <Text style={tw`font-bold text-2xl`}>WELCOME BACK</Text>
        <Text style={tw`text-[#ADADAD] text-sm mb-10`}>Log in to you account</Text>
       <TextField/>
       <TextField/>
      
        <Text  onPress={() => navigation.navigate('DashWelcome')}
      style={tw`bg-[#E7994B] w-full mt-12 text-center font-bold text-4 text-white rounded-3xl  flex justify-center p-2 text-center `}>Log In</Text>
        <Text style={tw`text-[#ADADAD] text-sm mt-10` }>Forgot Password</Text>
        <View style={tw`flex flex-row`}>
          
        <Text>Do you have account? </Text>
        <Text style={tw`font-bold text-[#E7994B]` } onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
        
  
        </View>
        
        
        </View>
    </View>
    </View>
    
    </View>
  )
}
const styles = StyleSheet.create({
   
    image: {
    
      height: 400,
      justifyContent: 'center',
    },
  
   
  });
