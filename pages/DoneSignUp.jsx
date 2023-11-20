import React from 'react'
import CustomHeader from '../components/Header'
import { View } from 'react-native'
import { Text } from 'react-native'
import tw from "twrnc"

export default function DoneSignUp() {
  return (

   <View>
             <CustomHeader/>
             <View style={tw `font-bold justify-center items-center flex `}>
        <Text>Thank You For Registering Your </Text>
        <Text> Home With Pekugara Your Account Will Be</Text>
        <Text>Verified Within 24 Hours</Text>
        </View>
        </View>
    
  )
}
