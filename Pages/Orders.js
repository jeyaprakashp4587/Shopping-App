import { StyleSheet, Text, View, Pressable, ScrollView, Image } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import Ripple from 'react-native-material-ripple';
import { UseData } from '../Export';

const Orders = ({ navigation }) => {
  const { orderdetails, cartdetails,username } = UseData();
  const [isordershow, setIsordershow] = useState();
  const ordershow = useRef(null);
  const cartshow = useRef(null);
  

  useEffect(() => {
    if (orderdetails.length === 0 || cartdetails.length === 0) {
      setIsordershow(false);
    } else if (orderdetails.length > 0 || cartdetails.length > 0) {
      setIsordershow(true);
    }
  }, [orderdetails, cartdetails]);

  // hide and show order and cart details

  const orderHandle = () => {
     if(ordershow.current){
      ordershow.current.setNativeProps({
        style:{
          display : 'flex',
        }
      });
      //  hide cart 
      cartshow.current.setNativeProps({
        style:{
          display : 'none',
        }
      });
     }
    

  }

  const cartHandle = () => {
    if(cartshow.current){
      cartshow.current.setNativeProps({
        style:{
          display : 'flex',
        }
      });
      // hide order
      ordershow.current.setNativeProps({
        style:{
          display : 'none',
        }
      });
     }
  }

  return (
    <View style={{ flex: 1 }}>
      {/* header */}
      <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', paddingHorizontal: 20, backgroundColor: 'white' }}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <FontAwesomeIcon icon={faArrowLeft} color='#58619c' size={25} />
        </Pressable>
        <Text style={{ fontSize: 25, fontWeight: '600' }}>{username} orders</Text>
        <FontAwesomeIcon icon={faDeleteLeft} color='#58619c' size={25} />
      </View>
      <View style={{ flex: 0.1, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Ripple style={{ width: "25%", paddingVertical: 15, borderBottomWidth: 2, borderBottomColor: '#58619c' }} onPress={cartHandle}>
          <Text style={{ textAlign: 'center', color: 'grey', fontSize: 20 }}>Carts</Text>
        </Ripple>
        <Ripple style={{ width: "25%", paddingVertical: 15, borderBottomWidth: 2, borderBottomColor: '#58619c' }} onPress={orderHandle}>
          <Text style={{ textAlign: 'center', color: 'grey', fontSize: 20 }}>Orders</Text>
        </Ripple>
      </View>
      {/* cart Content */}
      <ScrollView style={{ flex: 1 }} >

        {/* Check if order data exists */}

        { isordershow ? 

          <View style={{flex: 1}}>

              <View style={{ height: 700, marginTop: 20, padding: 10, flexDirection: 'column', gap: 20, display: 'none' }}  ref={ordershow}>
                {/* orderdetails */}
                {orderdetails.map((item,index) => (
                  <View key={index} style={{ height: 100, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15, backgroundColor: 'white', borderRadius: 5 }}>
                    <View style={{ width: "25%", height: "100%", justifyContent: 'center', alignItems: 'center' }}>
                      <Image source={{ uri: item.img }} style={{ width: '75%', height: '90%', borderRadius: 5 }} />
                    </View>
                    <View style={{ width: "35%", height: "100%", justifyContent: 'center', paddingHorizontal: 20 }}>
                      <Text>{item.name}</Text>
                      <Text>{item.rate}</Text>
                    </View>
                    <View style={{ width: "40%", height: "100%", justifyContent: 'center', alignItems: 'center' }}>
                      <Text>fbfoit0u</Text>
                    </View>
                  </View>
                ))}
              </View>

                <View style={{ height: 600, marginTop: 20, padding: 10, flexDirection: 'column', gap: 20, display: 'flex'}}  ref={cartshow}>
                {/* cartdtails */}
                {cartdetails.map((item,index) => (
                  <View key={index} style={{ height: 100, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15, backgroundColor: 'white', borderRadius: 5 }}>
                    <View style={{ width: "25%", height: "100%", justifyContent: 'center', alignItems: 'center' }}>
                      <Image source={{ uri: item.img }} style={{ width: '75%', height: '90%', borderRadius: 5 }} />
                    </View>
                    <View style={{ width: "35%", height: "100%", justifyContent: 'center', paddingHorizontal: 20 }}>
                      <Text>{item.name}</Text>
                      <Text>{item.rate}</Text>
                    </View>
                    <View style={{ width: "40%", height: "100%", justifyContent: 'center', alignItems: 'center' }}>
                      <Text>fbfoit0u</Text>
                    </View>
                  </View>
                ))}
                </View>
            </View>
        : 
          <View style={{height: 600,alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{ textAlign: 'center' }}>No orders or items in the cart</Text>
          </View>
        }
      </ScrollView>
    </View>
  );
};

export default Orders;
