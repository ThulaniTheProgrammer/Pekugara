import React from 'react'
import { Text,TouchableOpacity,View,Image,styles, ScrollView, TextInput } from 'react-native'
import tw from "twrnc"
import TextField from '../components/TextField'
import Houses from './Houses'
import CustomHeader from '../components/Header'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function({navigation}) {
  return (
    <View>
        <CustomHeader style={tw `bg-white-600 px-2`}/>
        <ScrollView>

    <View style={tw `flex justify-between bg-white-600 px-2 flex-col `}> 
<View style={tw `flex justify-between bg-white-600  flex-row mx-3`}>
     <TouchableOpacity>
     <Entypo name="menu" size={24} color="black" />
         </TouchableOpacity>
          
       
            <Text style={tw `font-bold`}>Home</Text>
           
           <TouchableOpacity>
           <Ionicons name="notifications-outline" size={24} color="black" /> 
             </TouchableOpacity>
 </View>



    <View  style={tw `flex justify-between bg-white-600  flex-col mx-3 mt-8`}> 
       <Text style={tw `font-bold text-lg`}>Pekugara Students</Text>
         <Text style={tw `font-bold text-lg`}>Accomodation</Text>
    </View>

    <TextInput style={tw`bg-orange-200 rounded-2xl   flex justify-center p-2 my-1.5  text-center w-full  `}></TextInput>
 
    </View>
    <View style={tw `justify-between flex flex-row px-2 mt-4`}>
          <Text style={tw `font-light text-lg`}>Recent Added</Text>
            <Text>|</Text>
        <View style={tw `flex flex-row`}>
          <Text style={tw `font-bold text-sm text-[#E7994a] `} onPress={() => navigation.navigate('Houses')}>View All</Text>
            <TouchableOpacity>
            <AntDesign name="arrowright" size={24} color="silver" onPress={() => navigation.navigate('Houses')}/>
             </TouchableOpacity>
        </View>

    </View>

<View style={tw `flex  flex-row justify-between mx-1 `}>
        <View style={tw`relative`}>
            <Image source={require('../assets/house.jpg')} resizeMode="cover" style={tw `w-41 rounded-2xl h-48 m-2`}/>
           <Text style={tw`absolute bottom-8 mx-4 text-white text-lg`}>23 Mzari Avenue</Text>
           <Text style={tw`absolute bottom-5 mx-4 text-white font-light text-sm text-gray-200`}>$100 per month</Text>
        </View>
    <View>
         <Image source={require('../assets/house5.png')} resizeMode="cover" style={tw `w-41 rounded-2xl h-48 m-2 `}/>
         <Text style={tw`absolute bottom-8 mx-4 text-white text-lg`}>25 FairView Ave</Text>
           <Text style={tw`absolute bottom-5 mx-4 text-white font-light text-sm text-gray-200`}>$75 per month</Text>
    </View>
</View>

<View style={tw `justify-between flex flex-row px-2 mt-4`}>
          <Text style={tw `font-light text-lg`}>Featured Houses</Text>
            <Text>|</Text>
        <View style={tw `flex flex-row`}>
          <Text style={tw `font-semibold text-sm text-[#E7994a] `} onPress={() => navigation.navigate('Houses')}>View All</Text>
            <TouchableOpacity>
            <AntDesign name="arrowright" size={24} color="silver" />
             </TouchableOpacity>
        </View>

    </View>


<View style={tw `flex flex-row justify-center  mx-1`}>
     <View>
        <Image source={require('../assets/house4.png')} resizeMode="cover" style={tw `w-28 rounded-2xl h-28 m-2 `}/>
        <Text style={tw `text-center leading-1 font-medium text-3 text-gray-500`}>--Mzari--</Text>
     </View>
     <View>
        <Image source={require('../assets/house3.jpg')} resizeMode="cover" style={tw `w-28 rounded-2xl h-28 m-2 ml`}/>
        <Text style={tw `text-center leading-1 font-medium text-3 text-gray-500`}>Orange Groove</Text>
    </View>
    <View>
        <Image source={require('../assets/house2.jpg')} resizeMode="cover" style={tw `w-28 rounded-2xl h-28 m-2 ml`}/>
        <Text style={tw `text-center leading-1 font-medium text-3 text-gray-500`}>Mapako</Text>
    </View>

</View>
<View style={tw `flex flex-row justify-center  mx-1`}>
     <View>
        <Image source={require('../assets/house4.png')} resizeMode="cover" style={tw `w-28 rounded-2xl h-28 m-2 `}/>
        <Text style={tw `text-center leading-1 font-medium text-3 text-gray-500`}>--Mzari--</Text>
     </View>
     <View>
        <Image source={require('../assets/house3.jpg')} resizeMode="cover" style={tw `w-28 rounded-2xl h-28 m-2 `}/>
        <Text style={tw `text-center leading-1 font-medium text-3 text-gray-500`}>Orange Groove</Text>
    </View>
    <View>
        <Image source={require('../assets/house2.jpg')} resizeMode="cover" style={tw `w-28 rounded-2xl h-28 m-2 ml`}/>
        <Text style={tw `text-center leading-1 font-medium text-3 text-gray-500`}>Mapako</Text>
    </View>

</View>

<View style={tw `flex flex-row justify-center  mx-1`}>
     <View>
        <Image source={require('../assets/house1.jpg')} resizeMode="cover" style={tw `w-28 rounded-2xl h-28 m-2 ml`}/>
        <Text style={tw `text-center leading-1 font-medium text-3 text-gray-500`}>Mzari</Text>
     </View>
     <View>
        <Image source={require('../assets/house2.jpg')} resizeMode="cover" style={tw `w-28 rounded-2xl h-28 m-2 ml`}/>
        <Text style={tw `text-center leading-1 font-medium text-3 text-gray-500`}>Orange Groove</Text>
    </View>
    <View>
        <Image source={require('../assets/house.jpg')} resizeMode="cover" style={tw `w-28 rounded-2xl h-28 m-2 ml`}/>
        <Text style={tw `text-center leading-1 font-semibold tracking-0.2 text-3 text-gray-500`}>Mapako</Text>
    </View>

</View>


</ScrollView>
    </View>
    
  )
}
