import React from 'react'
import tw from "twrnc"
import { Text, View,Image, ScrollView } from 'react-native'
import TextField from '../components/TextField'
import HouseDetail from './HouseDetail'
import CustomHeader from '../components/Header'

export default function Houses({navigation}) {
  return (
    
    <View style={tw `px-1`}>  
     <CustomHeader/>
     <ScrollView>
       <TextField/>


       <View style={tw`relative mr-3`}>
            <Image source={require('../assets/house.jpg')} resizeMode="cover" style={tw `w-full rounded-2xl h-48 m-2`}/>
           <Text style={tw`absolute bottom-[25%] mx-4 text-white text-lg flex left-[25%] right-[0%]`}>....</Text>
           <View style={tw `mb-3`}>
           <Text style={tw `font-bold`}>Double Romm In Mzari</Text>
        <View style={tw `flex justify-between flex-row`}> 
           <Text style={tw`   font-light text-sm text-gray-500`} >$70 Per Month</Text>
            <Text  onPress={()=>navigation.navigate(HouseDetail)}>View More facilities</Text>   
           
         </View>
         </View>
           </View>


           <View style={tw`relative mr-3`}>
            <Image source={require('../assets/house.jpg')} resizeMode="cover" style={tw `w-full rounded-2xl h-48 m-2`}/>
           <Text style={tw`absolute bottom-[25%] mx-4 text-white text-lg flex left-[25%] right-[0%]`}>....</Text>
           <View style={tw `mb-3`}>
           <Text style={tw `font-bold`}>Double Romm In Mzari</Text>
        <View style={tw `flex justify-between flex-row`}> 
           <Text style={tw`   font-light text-sm text-gray-500`} >$70 Per Month</Text>
            <Text  onPress={()=>navigation.navigate(HouseDetail)}>View More facilities</Text>   
         </View>
         </View>
           </View>

           <View style={tw`relative mr-3`}>
            <Image source={require('../assets/house.jpg')} resizeMode="cover" style={tw `w-full rounded-2xl h-48 m-2`}/>
           <Text style={tw`absolute bottom-[25%] mx-4 text-white text-lg flex left-[25%] right-[0%]`}>....</Text>
           <View style={tw `mb-3`}>
           <Text style={tw `font-bold`}>Double Romm In Mzari</Text>
        <View style={tw `flex justify-between flex-row`}> 
           <Text style={tw`   font-light text-sm text-gray-500`} >$70 Per Month</Text>
            <Text  onPress={()=>navigation.navigate(HouseDetail)}>View More facilities</Text>   
           
         </View>
         </View>
           </View>

           <View style={tw`relative mr-3`}>
            <Image source={require('../assets/house.jpg')} resizeMode="cover" style={tw `w-full rounded-2xl h-48 m-2`}/>
           <Text style={tw`absolute bottom-[25%] mx-4 text-white text-lg flex left-[25%] right-[0%]`}>....</Text>
           <View style={tw `mb-3`}>
           <Text style={tw `font-bold`}>Double Romm In Mzari</Text>
        <View style={tw `flex justify-between flex-row`}> 
           <Text style={tw`   font-light text-sm text-gray-500`} >$70 Per Month</Text>
            <Text  onPress={()=>navigation.navigate(HouseDetail)}>View More facilities</Text>   
           
         </View>
         </View>
           </View>


       <View style={tw `h-100 mx-2`}>
        <Image source={require('../assets/house5.png')} resizeMode="cover" style={tw `w-full rounded-2xl h-full `}/>
          <Text>Double Romm In Mzari</Text>
        <View style={tw `flex justify-between flex-row`}> 
           <Text>$70 Per Month</Text>
            <Text  onPress={()=>navigation.navigate(HouseDetail)}>View More facilities</Text>   
           
         </View>
      
         <Image source={require('../assets/house5.png')} resizeMode="cover" style={tw `w-full rounded-2xl h-full `}/>
         <Text style={tw`flex-row flex`}>hjhhjh</Text>
         </View> 
         </ScrollView>
    </View>
   
  )
}
