import React from 'react'
import { Button, Text,TouchableOpacity,View } from 'react-native'

import tw from 'twrnc'
import Homey from './Homey'
import CustomHeader from '../components/Header'
import ButtonComp from '../components/Button'
import DoneSignUp from './DoneSignUp'
import SignIn from './SignIn'

export default function SignUp({navigation}) {
  return (
    <View>
    <CustomHeader/>
    <View  style={tw ` relative  h-full flex items-center px-2`}>
       
        <Text style={tw`font-bold text-2xl mb-5 `}>Create an account</Text>
        <TextField name='Tittle'/>    
<TextField name='Enter Your Name' />
<TextField name='Enter Your Surname'/>
<TextField name='Enter Your Phone'/>
<TextField name='Enter Your Email'/>
<TextField name='Upload proof of residence'/>
<TextField name='Upload National ID'/>
<TextField name='Take a selfie'/>

<View style={tw`mt-10`}>
<Text onPress={()=>navigation.navigate(DoneSignUp)}></Text>

<Text onPress={()=>navigation.navigate(DoneSignUp)} style={tw`bg-[#E7994B] rounded-lg font-bold text-white  p-2 my-3  flex justify-center p-2 my-3  text-center w-full   ` }>Register</Text>
  

</View>

<View  style={tw`w-full pr-0 mr-0`}>
      <Text style={tw `mt-8 text-[#ADADAD]`}> By signing in  you are agree to the following terms and conditions without reservation</Text>
</View>
    </View>
    </View>
  )
}
