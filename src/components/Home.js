import React from 'react'
import Aside from './Aside.'
import { Ampligram, AmpligramCollection } from '../ui-components';

const Home = () => {
  return (
    <div>
      <Aside />
    <div className='home'>
      
      <h1>Home</h1>
      
  


    </div>
    </div>
  )
  
}
const styles = {
  post: { width: 400, margin: '0 auto', padding: 20},
  comment: { paddingLeft: 30, textAlign: 'left'},
}

export default Home
