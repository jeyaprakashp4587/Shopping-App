import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList, Image, ScrollView, Pressable, KeyboardAvoidingView, Animated, Easing} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart,faSearch} from '@fortawesome/free-solid-svg-icons';
import Homelist from '../Json/HomList.json';
import Searchlist from '../Json/SearchList.json'
import { UseData } from '../Export';
import Ripple from 'react-native-material-ripple';

const Home = ({ navigation }) => {

  const {setSelecteddish,setFilterdata,searchtext,setSearchtext,setIsfiltertrue,username} = UseData();
  
 
  const currentLocation = ["Chennai","Coimbathore","Erode","Madurai","Tirunelveli"]
  const [data, setData] = useState([]);
  const [searchData,setSearchdata] = useState([]);
  const [category, setCategory] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  // current place style
  const currentPlaces = useRef(null);
  const [isplace,setIsplace] = useState(true);
  const arrow = useRef(null);
  const [currentPlacedata,setCurrentPlacedata] = useState();
  const ScrollViewref = useRef(null);

  useEffect(() => {
    setData(Homelist.Homelist);
    setCategory(Homelist.Footlist);
    setRestaurant(Homelist.restaurant);
  }, []);

  useEffect(()=>{

    setSearchdata(Searchlist.search);

  },[])

  // filter
  const searchHandle = (text)=> {
    setSearchtext(text);
  }
  const filterHandle = ()=> {
    // routing search wrapper
    navigation.navigate("Search");
    const filter = searchData.filter((food) => {
      return (food.dish === searchtext.toLowerCase().trim())
    }
    )
    setFilterdata(filter);

    if(filter.length > 0){
      setIsfiltertrue(false);
   }
   else if(filter.length == 0 || filter.length < 0){
      setIsfiltertrue(true);
   }
  }
   //  hide ans show current place
   const placehandler = () => {
    if(isplace){
      if(currentPlaces.current){
        currentPlaces.current.setNativeProps({
          style:{
            display: 'flex',
          }
        })
      }
      if(arrow.current){
        arrow.current.setNativeProps({
          style:{
            transform: [{ rotate: '-180deg' }]
          }
        })
        
      }
    }
    else{
      if(currentPlaces.current){
        currentPlaces.current.setNativeProps({
          style:{
            display: 'none',
          }
        })
        setCurrentPlacedata(null);
      }
      if(arrow.current){
        arrow.current.setNativeProps({
          style:{
            transform: [{ rotate: '0deg' }]
          }
        })
      }
    }
    setIsplace(!isplace);
   }

  //  filter current place
  
  const [zoomAnim] = useState(new Animated.Value(1));

  const filterPlace = (item) => {
      setCurrentPlacedata(item);
      if(ScrollViewref.current){
        ScrollViewref.current.scrollTo({ y: 500, animated: true});
      }
    //   const rest = restaurant.filter((item)=> {
    //     return currentPlacedata === item.place
    // })
    // setRestplace(rest);
    // animation restaurant 
    if (currentPlacedata) {
      // Animate the zoom effect
      Animated.timing(zoomAnim, {
        toValue: 1.1, 
        duration: 500, 
        easing: Easing.linear,
        useNativeDriver: false, 
      }).start(); 
    } else {
      Animated.timing(zoomAnim, {
        toValue: 1, 
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
  }


  return (
    <KeyboardAvoidingView style={{backgroundColor: 'rgba(246, 246, 246, 255)',height: '100%',flex: 1}}  enabled>
      
        {/* Home header */}
        <View style={styles.header}>
          <View style={{flex: 1}}>
            <Text>Search to</Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={placehandler}>
              <Text style={{ fontSize: 20 }}>Current Location </Text>
              <Image source={{ uri: "https://i.ibb.co/xzWf0Br/down-arrow.png" }} style={{ width: 22, height: 25 }} ref={arrow}/>
            </TouchableOpacity>
            {/* current  location list */}
            <View ref={currentPlaces} style={{position: 'absolute',backgroundColor: 'white',width: '55%',zIndex: 4,top: "80%",borderRadius: 10,display: 'none'}}>
              {
                currentLocation.map((item,index)=>(
                  <Ripple key={index} onPress={()=>filterPlace(item)}> 
                    <Text style={{padding: 15,fontSize: 17,paddingHorizontal: 30}}>{item}</Text>
                  </Ripple>
                ))
              }
            </View>
          </View>
          <TouchableOpacity onPress={()=> navigation.navigate("Orders")}>
            <Image source={{ uri: "https://i.ibb.co/NY1KcTg/shopping-bag.png" }} style={{ width: 35, height: 30 }} />
          </TouchableOpacity>
        </View>

        {/* Search wrapper */}
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 100}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', width: '90%', justifyContent: 'space-between', padding: 10, borderRadius: 30, paddingHorizontal: 30, elevation: 5, height: "50%" }}>
            <TouchableOpacity>
              <Image source={{ uri: "https://i.ibb.co/GM35dk0/equalizer.png" }} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
            <TextInput placeholder='Search Foods' style={{ color: 'rgba(88, 98, 158, 255)', fontWeight: '600', fontSize: 15 }} value={searchtext} onChangeText={searchHandle}/>
            <TouchableOpacity style={{ borderColor: 'rgba(88, 98, 158, 255)', paddingLeft: 20, paddingVertical: 5, borderLeftWidth: 1}} onPress={filterHandle}>
              <FontAwesomeIcon icon={faSearch} size={20} color='rgba(88, 98, 158, 255)' />
            </TouchableOpacity>
          </View>
        </View>
       
      <ScrollView showsVerticalScrollIndicator={false} ref={ScrollViewref}>
        {/* Category wrapper */}
        <View style={{height: 110,flexDirection: 'row', alignItems: 'center', width: '100%', alignItems: 'center' }}>
          <FlatList
            data={category}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View key={item.id} style={{ width: 80, height: '90%', alignItems: "center", justifyContent: 'center', margin: 'auto', marginRight: 20, borderRadius: 10, backgroundColor: 'rgba(231, 232, 237, 255)', rowGap: 5, elevation: 4 }}>
                <Image source={{ uri: item.img }} style={{ width: '50%', height: '50%' }} />
                <Text style={{ fontWeight: '600', color: 'rgb(152, 152, 152)' }}>{item.name}</Text>
              </View>
            )}
          />
        </View>

        {/* Content wrapper */}
        <View style={{borderColor: 'red',flex: 1}}>
          {/* today best deals */}
          <View style={{ borderColor: 'red', height: 310}}>
            {/* Content header */}
            <View style={{ width: '100%', flex: 1.5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: '700' }}>Today's Best Deals</Text>
              <TouchableOpacity>
                <Text style={{ color: 'rgba(89, 97, 154, 255)' }}>SHOW ALL</Text>
              </TouchableOpacity>
            </View>
            {/* Content items */}
            <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center'}}>
              <FlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Pressable style={{height: '98%'}} onPress={()=>{navigation.navigate("Details");setSelecteddish(item)}}>
                    <View style={{ width: 300, height: "100%", backgroundColor: 'rgba(231,232,237,255)', borderRadius: 10, flex: 1, marginRight: 20, elevation: 4 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <Image source={{ uri: item.img }} style={{ width: "95%", height: "93%", borderRadius: 20 }}/>
                      <FontAwesomeIcon icon={faHeart} style={{position: 'absolute',top: 30,right: 30}} size={25} color='white'/> 
                    </View>
                    <View style={{position: 'absolute',bottom: 90,right: 25}}>
                      <Text style={{backgroundColor: 'red',color: 'white',paddingHorizontal: 10,paddingVertical: 5,borderRadius: 10,fontSize: 13}}>50%Off</Text>
                    </View>
                    <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20,paddingVertical: 10}}>
                      <View>
                        <Text style={{ fontSize: 17, fontWeight: '700' }}>{item.name}</Text>
                        <Text style={{ fontSize: 15 }}>{item.category}</Text>
                      </View>
                      <View>
                        <Text style={{ fontSize: 20, fontWeight: '800', color: '#58619c' }}>{item.rate}</Text>
                      </View>
                    </View>
                  </View>
                  </Pressable>
                )}
              />
            </View>
          </View>

          {/* restaurant */}
          <View style={{height: 500}}>
            {/* restaurant header */}
            <View style={{ width: '100%', flex: 0.7, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: '700' }}>Top Restaurants</Text>
              <TouchableOpacity>
                <Text style={{ color: 'rgba(89, 97, 154, 255)' }}>SHOW ALL</Text>
              </TouchableOpacity>
            </View>
            {/* restaurant content */}
            <View style={{ flex: 3, rowGap: 5}}>
              {restaurant.map((item) => (
                <Animated.View key={item.id} style={{ flexDirection: 'row', justifyContent: 'center',flex: 1, backgroundColor: currentPlacedata === item.place ? "#e6e6e6" : null,transform: currentPlacedata === item.place ? [{ scale: zoomAnim }] : [{ scale: 1 }]}}>
                  <View style={{ width: '25%',justifyContent: 'center',alignItems: 'center'}}> 
                    <Image source={{ uri: item.img }} style={{ width: '75%', height: '75%',borderRadius: 15}} />
                  </View>
                  <View style={{ width: '55%', justifyContent: 'center', paddingLeft: 10 }}>
                    <Text style={{fontSize: 20,fontWeight: '600'}}>{item.name}</Text>
                    <Text style={{fontSize: 15}}>{item.place}</Text>
                  </View>
                  <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faHeart} size={20} color='grey' />
                  </View>
                </Animated.View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    position: 'relative',
    height: 70,
    
    // borderWidth: 1
    // borderTopLeftRadius,
    // borderTopRightRadius
  },
});
