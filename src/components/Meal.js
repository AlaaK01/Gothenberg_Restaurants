import React from 'react'
import { HeroLayout1 } from '../ui-components';
import {Flex, View, Divider, useTheme} from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

const Meal = ({selectMeal}) => {
  const { tokens } = useTheme();
  const navigate = useNavigate();

  const handleBackToRestaurant = () => {
    navigate('../../allrestaurants/restaurant')
  }

  return (
    <div className='meal'>
      <Divider border="5px solid pink" borderRadius="10px" />
  
      <div className='back-all-restaurant'>
        <button onClick={() => handleBackToRestaurant()}>
                Back To Restaurant
              </button>
      </div>
      <Divider border={`${tokens.borderWidths.large} solid ${tokens.colors.brand.primary[80]}`} />
      <h1>Meal Details</h1>
      
      <HeroLayout1 mealDetails={selectMeal}/>
      <Divider border="5px solid pink" borderRadius="10px" />
    </div>
  )
}

export default Meal
