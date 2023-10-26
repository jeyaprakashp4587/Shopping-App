import { View } from 'react-native'
import React from 'react'
import { UseData } from './Export'
import Layout from './Layout';
import Login from './Login';

const Routing = () => {
    const {click} = UseData();
  return (
    <View style={{flex: 1}}>

     {click ? <Layout/> : <Login/> }
     
    </View>
  )
}

export default Routing

