import React from 'react'
import {RestaurantsCollection} from '../ui-components/'
import {Flex, View} from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

const AllRestautants = ({setSelectRestaurant}) => {
  const navigate = useNavigate();


  return (
    <div className='allrestaurants'>
      
      
      
     
        <View className="title">
        <p>All Restaurants</p>
        </View>
      
      <Flex >
      <RestaurantsCollection
  overrideItems={({ item, index }) => ({
    style: {
      cursor: "pointer"
    },
    onClick: () => {
      setSelectRestaurant(item)
       navigate('./restaurant')
    }
  })}
/>



      </Flex>
      


    </div>
  )
}

export default AllRestautants
