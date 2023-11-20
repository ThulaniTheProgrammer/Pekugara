import React from 'react'
import CustomHeader from '../components/Header'
import { View } from 'react-native'
import DashHearder from '../components/DashHearder'
import tw from 'twrnc'
import { Text } from 'react-native'

export default function DashRoom({navigate}) {
  return (
 <View>
    <CustomHeader/>
    <DashHearder/>
    <View>
        <Text>Add Rooms</Text>
    </View>
 </View>
  )
}
