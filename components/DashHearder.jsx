import React from 'react'
import { View,Text, TouchableOpacity} from 'react-native'
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function DashHearder() {
  return (
    
   <View style={tw `flex justify-between bg-white-600  flex-row mx-3 mb-8`}>
     <TouchableOpacity>
     <Entypo name="menu" size={24} color="black" />
         </TouchableOpacity>
          
       
            <Text style={tw `font-bold`}>DashboardR</Text>
           
           <TouchableOpacity>
           <Ionicons name="notifications-outline" size={24} color="black" /> 
             </TouchableOpacity>
 </View>

  )
}
