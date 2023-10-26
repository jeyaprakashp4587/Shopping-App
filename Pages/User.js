import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { UseData } from '../Export'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faGreaterThan, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

export default function User({ navigation }) {

    const {username} = UseData();
    // profile details
    const details = ["My Orders","Shipping Adress","Payment Method","My Reviews","Settings"]
  return (
    <View style={{flex: 1,backgroundColor: 'rgba(246, 246, 246, 255)'}}>
      {/* header */}
      <View style={{flex: 0.5,flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',paddingHorizontal: 20,backgroundColor: 'white'}}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faArrowLeft} color='#58619c' size={25}/>
        </TouchableOpacity>
        <Text style={{fontSize: 25,fontWeight: '600'}}>Your Account</Text>
        <TouchableOpacity>
            <FontAwesomeIcon icon={faSearch} color='#58619c' size={25}/>
        </TouchableOpacity>
      </View>
      {/* content */}
      <View style={{flex: 4}}> 
        {/* profile wrapper */}
        <View style={{flex: 1,justifyContent: 'center',paddingLeft: 20,rowGap: 20}}>
           <Text style={{fontSize: 25}}>My profile</Text>
           <View style={{flexDirection: 'row',alignItems: 'center'}}>
             <FontAwesomeIcon icon={faUser} size={30}/>
             <Text style={{fontSize: 20,color: 'grey',paddingLeft: 10}}>{username}</Text>
           </View>
        </View>
        {/* profile wrapper */}
        <View style={{flex:4,rowGap: 20,paddingTop: 10}}>
           {
            details.map((item,index)=>(
                <TouchableOpacity key={index} style={{flexDirection: 'row',height: '15%',alignItems: 'center',justifyContent: 'space-between',paddingHorizontal: 20}} onPress={()=> navigation.navigate("Orders")}>
                        <Text style={{fontSize: 20}}>{item}</Text>
                        <FontAwesomeIcon icon={faGreaterThan} size={15}/>
               </TouchableOpacity>
            ))
           }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})