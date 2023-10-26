import { View, Text,Image, TouchableOpacity, Pressable, SafeAreaView, Button,StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft,faHeart, faMale, faTimes,faWeightHanging} from '@fortawesome/free-solid-svg-icons'
import { UseData } from '../Export'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import Ripple from 'react-native-material-ripple'

const Details = ({navigation}) => {

  const {selecteddish,setOrderdetails,orderdetails,cartdetails,setCartdetails} = UseData();

  // const [display,setDisplay] = useState('none');
  const Ordershow = useRef(null);
  const cartShow = useRef(null);
 
  //order hide and show 

    const orderHandleclick = ()=>{
      if(selecteddish){
        if(Array.isArray(orderdetails)){
          setOrderdetails([...orderdetails,selecteddish]);
        }
      }
      setTimeout(() => {
        if(Ordershow.current){
          Ordershow.current.setNativeProps({
            style:{
              display: 'flex',
            }
          });
        }
      }, 1000);
    }
  
  const hideHandleclick = ()=>{
    // orden hidden
    if(Ordershow.current){
      Ordershow.current.setNativeProps({
        style:{
          display: 'none',
        }
      })
    }
    // cart hiden
    if(cartShow.current){
      cartShow.current.setNativeProps({
        style:{
          display: 'none',
        }
      })
    }
  }
   
  // cart hide and show
  
  const cartHandleclick = ()=>{
    if(selecteddish){
      if(Array.isArray(cartdetails)){
        setCartdetails([...cartdetails,selecteddish]);
      }
    }
    setTimeout(() => {
      if(cartShow.current){
        cartShow.current.setNativeProps({
          style:{
            display: 'flex',
          }
        })
      }
    }, 1000);
  }
  
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* header */}
      <View style={{flexDirection: 'row',justifyContent: 'space-between',flex: 0.3,alignItems: 'center',paddingHorizontal: 20}}>
        <Pressable onPress={()=>navigation.navigate("Home")}>
          <FontAwesomeIcon icon={faArrowLeft} color='#58619c' size={25}/>
        </Pressable>
        <Text style={{fontSize: 25,fontWeight: '600'}}>Details</Text>
        <FontAwesomeIcon icon={faHeart} color='#58619c' size={20}/>
      </View>
      {/* dish details */}
      <View style={{flex: 3,borderColor: 'red',alignItems: 'center',rowGap: 20}}>
        <View style={{width: '100%',flex: 2,justifyContent: 'center',alignItems: 'center',width: '80%'}}>
          <Image source={{uri: selecteddish.img}} style={{width: '100%',height: '95%',borderRadius: 20}} />
        </View>
        <View style={{flex: 1,paddingHorizontal: 20,rowGap: 30,width: '100%'}}>
           <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={{fontSize: 25,fontWeight: '700'}}>{selecteddish.name}</Text>
              <Text style={{ fontSize: 25, fontWeight: '800', color: '#58619c' }}>{selecteddish.rate}</Text>
           </View>
           <View style={{rowGap: 20}}>
              <View style={{flexDirection: 'row',alignItems: 'center'}}>
                 <FontAwesomeIcon icon={faClock} color='grey' size={20}/>
                 <Text style={{color: 'grey',paddingHorizontal: 10,fontSize: 16}}>30-40 MIN + Delivery Time</Text>
              </View>
              <View style={{flexDirection: 'row',alignItems: 'center'}}>
                 <FontAwesomeIcon icon={faWeightHanging} color='grey' size={20}/>
                 <Text style={{color: 'grey',paddingHorizontal: 10,fontSize: 16}}>{selecteddish.weight}</Text>
              </View>
              <View style={{flexDirection: 'row',alignItems: 'center'}}>
                  <FontAwesomeIcon icon={faMale} color='grey' size={20}/>
                 <Text style={{color: 'grey',paddingHorizontal: 10,fontSize: 16}}>{selecteddish.chef}</Text>
              </View>
           </View>
        </View>
      </View>
      {/* order wrapper */}
      <View style={{flex: 0.5,flexDirection: 'row',alignItems: 'center',justifyContent: 'space-around',borderTopRightRadius: 30,borderTopLeftRadius: 30,backgroundColor: 'white'}}>
        <TouchableOpacity style={{borderWidth: 1,borderRadius: 30,paddingHorizontal: 50,paddingVertical: 15,borderColor: '#58619c',backgroundColor: 'rgba(231,232,237,255)'}} onPress={orderHandleclick}>
          <Text style={{color: '#58619c',fontWeight: '700'}}>Order Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius: 30,paddingHorizontal: 50,paddingVertical: 15,backgroundColor: '#58619c'}} onPress={cartHandleclick}>
          <Text style={{color: 'white',fontWeight: '700'}}>Add To Card</Text>
        </TouchableOpacity>
      </View>


      {/* add to card message */}
      <View ref={cartShow} style={{display: 'none',position: 'absolute',width: '100%',height: 300,bottom: 0,borderTopRightRadius: 50,borderTopLeftRadius: 50,backgroundColor: 'white',height: 400,justifyContent: 'center',alignItems: 'center',rowGap: 30}}>
        <TouchableOpacity style={{position: 'absolute',top: '5%',zIndex: 4,right: "10%"}} onPress={hideHandleclick}>
            <FontAwesomeIcon icon={faTimes} size={25} />
        </TouchableOpacity>
        <Image source={{uri: "https://i.ibb.co/fnhzHh5/shopping-cart-1.png"}} style={{width: 150,height: 150}}/>
        <Text style={{fontSize: 20,fontWeight: '600',color: 'grey'}}>Add To Card Sucessfully</Text>
        <Ripple style={{backgroundColor: '#58619c',paddingHorizontal: 25,paddingVertical: 10,borderRadius: 10}}>
          <Text style={{color: 'white'}}>View Carts</Text>
        </Ripple>
      </View>
      {/* order sucessfull message */}
      <View ref={Ordershow} style={{display: 'none',position: 'absolute',width: '100%',height: 300,bottom: 0,borderTopRightRadius: 50,borderTopLeftRadius: 50,backgroundColor: 'white',height: 500,justifyContent: 'center',alignItems: 'center',rowGap: 30}}>
        <TouchableOpacity style={{position: 'absolute',top: '5%',zIndex: 4,right: "10%"}} onPress={hideHandleclick}>
          <FontAwesomeIcon icon={faTimes} size={25} />
        </TouchableOpacity>
        <Image source={{uri: "https://i.ibb.co/xzTWK29/correct.png"}} style={{width: 150,height: 150}}/>
        <Text style={{fontSize: 30,width: "50%",textAlign: 'center'}}>Thank You For Your Order.</Text>
        <Ripple style={{backgroundColor: '#58619c',paddingHorizontal: 25,paddingVertical: 10,borderRadius: 10}} onPress={()=> navigation.navigate("Orders")}>
          <Text style={{color: 'white',fontSize: 17}}>Track My Order</Text>
        </Ripple>
        <Text style={{color: 'grey',fontSize: 15}}>Order Something Else</Text>
      </View>
    </SafeAreaView>
  )
}

export default Details;


const styles = StyleSheet.create({
  button:{
    padding: 30,
    backgroundColor: 'red',
    textAlign: 'center'
  }
})