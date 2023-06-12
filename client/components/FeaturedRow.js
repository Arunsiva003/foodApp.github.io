import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { ArrowRightIcon } from 'react-native-heroicons/outline'
// import Card from './resturantCard'
import { getFeaturedRestaurantById } from '../api'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme'
import RestaurantCard from './RestaurantCard';

export default function FeaturedRow({id, title, description, restaurants}) {
  // const [restaurants, setRestaurants] = useState([]);

  // useEffect(() => {
  //   // getFeaturedRestaurantById(id).then(data=>{
  //   //   // console.log('got data: ',data);
  //   //   setRestaurants(data?.resturants);
  //   // })
  // }, [id])
  
  // console.log(resturants);
  
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">
            {description}
          </Text>
        </View>
        
        <TouchableOpacity>
          <Text style={{color: themeColors.text}} className="font-semibold">See All</Text>
        </TouchableOpacity>
      </View>

      

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        className="overflow-visible py-5"
       >
      
        { restaurants.map(restaurant => {
          {/* console.log(restaurant.image) */}
            return(
        <RestaurantCard
                  key={restaurant.id}
                  item={restaurant}

              />    
            )
          })
        }           
       </ScrollView>
    
    </View>
  )
}