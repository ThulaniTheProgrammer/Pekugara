import React from 'react'
import { Text, View,Image,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/Header'
import DashHearder from '../components/DashHearder'
import tw from 'twrnc'

export default function DashWelcome   ({navigation}){
  return (
    <SafeAreaView>
        <CustomHeader/>
        <DashHearder/>
        
  <View style={tw `m-4`}>
 
  <View  style={tw `flex justify-between flex-row`}>
<Text style={tw`font-bold text-2xl`}>Hi Nyasha</Text>
<Image source={require('../assets/house.jpg')} resizeMode="cover" style={tw `w-12 rounded-full h-12`}/> 

        </View>
 
  <TouchableOpacity onPress={()=>navigation.navigate('DashHouseDetails')}>
  <View style={tw `bg-[#DD8833] w-full h-40 flex flex items-center rounded-2xl justify-center`}>
        <Text style={tw `text-white font-bold text-5`}>Register New House</Text> 
  </View>
  </TouchableOpacity>
  <View>
    <Text style={tw`font-bold text-2xl my-8`}>Manage Your Houses</Text>
  </View>
  <View>
  <Image source={require('../assets/house.jpg')} resizeMode="cover" style={tw `w-full rounded-2xl h-60`}/>      
  </View>
  <View style={tw `flex justify-between flex-row`}>
<Text>23 mzari avenue</Text>
<Text>edit</Text>
  </View>
  </View>
  </SafeAreaView>
  )
}
