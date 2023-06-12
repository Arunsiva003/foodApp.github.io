import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import { StatusBar } from 'expo-status-bar';
import { themeColors } from '../theme';
import Categories from '../components/Categories';
import {featured}  from '../constants';
import FeaturedRow from '../components/FeaturedRow';
import { useNavigation } from '@react-navigation/native';
import { getFeaturedRestaurants } from '../api';
import { useLayoutEffect, useState, useEffect} from 'react';


export default function HomeScreen() {


 return (
    <SafeAreaView className="bg-white" >
    <StatusBar
        barStyle="dark-content" 
    />
    {/* search bar */}
        <View className="flex-row items-center space-x-2 px-4 pb-2 ">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                <Icon.Search height="25" width="25" stroke="gray" />
                <TextInput placeholder='Resturants' className="ml-2 flex-1" keyboardType='default' />
                <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                    <Icon.MapPin height="20" width="20" stroke="gray" />
                    <Text className="text-gray-600">kdnl</Text>
                </View>
            </View>
            <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
                <Icon.Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
            </View>
        </View>

     {/* main */}

     <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
            paddingBottom:25
        }}>
            {/* Categories section */}
            <Categories/>
 
            {/* Featured */}
            <View className="mt-5">
                {
                    featured.map((category,id)=>{
                        return(
                            <FeaturedRow
                                key={id}
                            id={category.id}
                            title={category.title}
                            restaurants={category.restaurants}
                            description={category.description}
                            featuredCategory={category.category}
                            />
                        )
                    })
                }
            </View>
        </ScrollView>

    
    </SafeAreaView>)
}