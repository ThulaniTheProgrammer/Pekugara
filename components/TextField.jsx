import React from 'react'
import { TextInput } from 'react-native'
import tw from 'twrnc'

export default function TextField(props) {
  return (
    <TextInput    placeholder={props.name} style={tw`bg-[#F7994B] text-gray-500 rounded-2xl  flex justify-center p-2 my-1.5  text-center w-full  `}></TextInput>
  )
}
