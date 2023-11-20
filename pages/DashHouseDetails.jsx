import React from 'react'
import { View,Text,TextInput,TouchableOpacity } from 'react-native'
import CustomHeader from '../components/Header'
import DashHearder from '../components/DashHearder'
import DashTextButton from '../components/DashTextButton'
import tw from 'twrnc'
import TextField from '../components/TextField'
import ButtonComp from '../components/Button'
import DashRoom from './DashRoom'

export default function DashHouseDetails({navigation}) {
  return (
    <View style={tw `mx-2`}>
<View>
  <CustomHeader/>
  <DashHearder/>
</View>
       <View>
<Text  style={tw`font-bold text-2xl my-2`}>HouseDetails</Text>
       </View>
       <View>
        <Text >location:</Text>
        <DashTextButton name='Enter Your Location'/>
        <Text>Street Address</Text>
        <DashTextButton name='street address'/>
      </View>
      <View>
        <Text>Approaximate Distance to Campus</Text>
        <TextField/>
      </View>
      <View>
        <Text style={tw`font-medium text-2xl my-2`}>Facilities</Text>
        <View style={tw `flex justify-between flex-row`}>
            <Text>Wifi</Text>
            <Text>Tv</Text>
            <Text>Bed</Text>
        </View>
        <Text style={tw`font-light text-2xl my-2`}>House Type</Text>
        <View style={tw `flex justify-between flex-row`}>
            <Text>Mixed</Text>
            <Text>Boys Only</Text>
            <Text>Girls Only</Text>
        </View>
        <TouchableOpacity>
  <View style={tw `bg-[#E7994B] w-full h-30 flex flex items-center justify-center rounded-2xl`}>
        <Text style={tw  `text-white text-6`} >Upload Your House Images</Text> 
        
  </View>
  </TouchableOpacity>
  <View>
    <Text style={tw `text-gray-400`}>Click Next To Upload Your House Rooms and Thier Prices</Text>
  </View>
      </View>
      
      <TouchableOpacity style={tw ` w-1/4 `}>
      <Text  onPress={() => navigation.navigate('DashRoom')}
      style={tw`bg-red-100 rounded-2xl flex justify-center p-4 text-center font-bold text-4 text-white bg-[#E7994B] `}>Next</Text>
      </TouchableOpacity>

       </View>
  )
}
