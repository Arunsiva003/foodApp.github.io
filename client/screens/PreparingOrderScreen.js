import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native';

export default function PreparingOrderScreen() {
    
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Delivery');
        },3000);
    },[])
  
    return (
    <View className="justify-center items-center flex-1 bg-white">
      <Image source={require("../assets/images/delivery.gif")}/>
    </View>
  )
}