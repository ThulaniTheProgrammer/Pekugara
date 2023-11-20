import React from 'react'
import { TouchableOpacity,Text, View } from 'react-native'
import tw from 'twrnc'


export default function ButtonComp(props) {
  return (
    <View>
 
    <Text style={tw`bg-[#E7994B] rounded-lg font-bold text-white  p-2 my-3  flex justify-center p-2 my-3  text-center w-full   ` }>{props.name}</Text>
  
    </View>
  )
}
