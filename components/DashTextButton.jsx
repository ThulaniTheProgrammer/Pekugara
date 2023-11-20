import React from 'react'
import { View,TextInput } from 'react-native'
import tw from 'twrnc'

export default function DashTextButton(props) {
  return (
    <View>
    <TextInput    placeholder={props.name} style={tw`border-[#F7994B] border-2 text-gray-500 rounded-2xl  flex justify-center p-2 my-1.5  text-center w-full  `}></TextInput>
   </View>
  )
}
