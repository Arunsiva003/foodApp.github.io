import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
// import {categories} from "../constants"
import { getCategories } from '../api';
import { urlFor } from '../sanity';

export default function Categories() {
    const [activeCategory,setActivecategory] = useState(null);
    const [categories,setcategories] = useState([]); 

    useEffect(()=>{
        // console.log("check")
        getCategories().then(data =>{
            setcategories(data);
        })
    },[])

  return (
    <View className="mt-5">
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    className="overflow-visible"
    contentContainerStyle={{
        paddingHorizontal:14
    }}>

        {
            categories.map((category,id)=>{
                let isActive = activeCategory;
                let btnClass = isActive? 'bg-red-600' : 'bg-gray-400';
                let textClass = isActive? 'font-semibold text-gray-800' : "text-gray-500"
                return (
                    <View key={id} className="flex justify-content items-center mr-6">
                    <TouchableOpacity className={"p-1 shadow bg-gray-200" + btnClass}
                    onPress={()=>setActivecategory(id)}>
                        <Image className="rounded-full" style={{width: 45, height: 45}} source={{uri: urlFor(category.image).url()}}/>
                    </TouchableOpacity>
                        <Text className={"text-sm"+textClass} >{category.name}</Text>
                    </View>

                )
            })
        }

    </ScrollView>
    </View>
  )
}