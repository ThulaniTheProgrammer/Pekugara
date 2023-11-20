import React from 'react'
import { Text, View,Image,TouchableOpacity,ScrollView} from 'react-native'
import tw from 'twrnc'
import CustomHeader from '../components/Header'

export default function HouseDetail() {
  return (
   <View style={tw `mx-1`}>
<CustomHeader/>
     <View >
     <Image source={require('../assets/house5.png')} resizeMode="cover" style={tw `w-full rounded-2xl h-70 `}/>
     </View>
     <Text style={tw `text-lg my-2 font-medium`}>Facilities</Text>
   x       

       
<Text style={tw `text-lg my-2 font-medium`}>Listing Gallery</Text>
<View style={tw `flex flex-row justify-between`}>
<Image source={require('../assets/house5.png')} resizeMode="cover" style={tw `w-15 h-15  rounded-2xl `}/>
<Image source={require('../assets/house5.png')} resizeMode="cover" style={tw `w-15 h-15 rounded-2xl `}/>
<Image source={require('../assets/house5.png')} resizeMode="cover" style={tw `w-15 h-15 rounded-2xl `}/>
<Image source={require('../assets/house5.png')} resizeMode="cover" style={tw `w-15 h-15 rounded-2xl  `}/>
<Image source={require('../assets/house5.png')} resizeMode="cover" style={tw `w-15 h-15 rounded-2xl  `}/>
</View>
   </View>
  )
}
