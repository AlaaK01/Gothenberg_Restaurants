import React from 'react'
import {Ampligram, StandardCardVariant2} from '../ui-components';
import {Flex, View, Divider, useTheme} from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

const Player = ({selectRestaurant, setSelectMeal}) => {
  const { tokens } = useTheme();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('../../allrestaurants')
  }

  return (
    <div className='restaurant'>
      <Divider border={`${tokens.borderWidths.large} solid ${tokens.colors.brand.primary[80]}`} />
     

      <div className='back-all-restaurant'>
        <button onClick={() => handleGoBack()}>
                Back To All Restaurants
              </button>
      </div>
      <Divider border="5px solid pink" borderRadius="10px" />
      <h1>Restaurant Details</h1>
      <Ampligram restautantDetails={selectRestaurant}/>

      
      <Divider border="5px solid pink" borderRadius="10px" />
      <h1>Restarant {selectRestaurant.name} s Meals</h1>
        <Divider border={`${tokens.borderWidths.large} solid ${tokens.colors.brand.primary[80]}`} />
        
        {selectRestaurant && selectRestaurant.Meals && selectRestaurant.Meals.map((m) => 
          <View key={m.id}>
              <StandardCardVariant2  meal={m}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSelectMeal(m)
                  console.log(m.name)
                  navigate('../../meal')
                }}
              />
          </View>
          )}
   
      <Divider border="5px solid pink" borderRadius="10px" />


    </div>
  )
}

export default Player
