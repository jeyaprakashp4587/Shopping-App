import { View, Text, FlatList ,Image,ScrollView,Pressable} from 'react-native'
import React from 'react'
import { UseData } from '../Export'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import Ripple from 'react-native-material-ripple';


const SearchDetails = ({ navigation }) => {

  const {filterdata,setSelecteddish,searchtext,isfiltertrue} = UseData();

   

  return (
        <View style={{flex: 1}}>

          {
            isfiltertrue ? 

            <View style={{flex:1,backgroundColor: 'white',justifyContent: 'center',alignItems: 'center'}}>
              <Image source={{uri: "https://i.ibb.co/KKW56xz/5928293-2953962.jpg"}} style={{width: "100%",height: "40%"}}/>
               <Text style={{fontSize: 25,fontWeight: '600',textAlign: 'center'}}>{searchtext}... Reusult Not Found</Text>
            </View> 
            :
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingHorizontal: 20,alignItems: 'center',flex: 0.1}}>
                <Pressable onPress={()=>navigation.navigate("Home")}>
                  <FontAwesomeIcon icon={faArrowLeft} color='#58619c' size={25}/>
                </Pressable>
                <Text style={{fontSize: 25,fontWeight: '600'}}>{searchtext}</Text>
                <Pressable>
                  <FontAwesomeIcon icon={faSearch} size={25} color='grey'/>
                </Pressable>
              </View>
              
              <ScrollView style={{flex: 1}}>
                <View style={{flexWrap: 'wrap',flexDirection: 'row',justifyContent: 'center',rowGap: 20,columnGap: 11,paddingVertical: 20}}>
                    {
                    filterdata.map((item)=>(
                      <Ripple style={{width: "46%",height: 260}} onPress={()=> {navigation.navigate("Details");setSelecteddish(item)}}>
                        <View style={{borderRadius: 10,backgroundColor: 'rgba(231, 232, 237, 255)',elevation: 3,width: "100%",height: "100%"}}>
                          <View style={{flex: 3,justifyContent: 'center',alignItems: "center"}}>
                            <Image source={{uri: item.img}} style={{width: "96%",height: "95%",borderRadius: 10}} resizeMode='cover'/>
                          </View>
                          <View style={{flex: 1.2,justifyContent: 'center',alignItems: 'center'}}>
                            <Text style={{fontSize: 17,fontWeight: '600'}}>{item.name}</Text>
                            <Text style={{fontSize: 16,color: 'rgba(89, 97, 154, 255)',fontWeight: '600'}}>{item.rate}</Text>
                          </View>
                        </View>
                      </Ripple>
                    ))
                    }
                </View>
              </ScrollView>
            </View>
          }         

        </View> 
  )
}

export default SearchDetails