import { ImageBackground,Text, View, TouchableOpacity,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { UseData } from './Export'
import { TextInput } from 'react-native'

const Login = () => {

  const {setClick,setUsername} = UseData();

  const [name,setname] = useState('');
  
  const handleTextChange = (names)=> {
    setname(names);
  }
  
  return (
    
    <ImageBackground source={{uri:"https://i.ibb.co/vsMdGGX/Whats-App-Image-2023-10-17-at-8-46-51-PM.jpg"}} style={{flex: 1}}>
      {/* login wrapper */}
      <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
        <View style={{width: "100%",height: "65%",justifyContent: 'center',alignItems: 'center',rowGap: 20}}>
           {/* wrapper header */}
           <View style={{flexDirection: 'row',width: "100%",justifyContent: 'center',padding: 10}}>
            <Text style={{padding: 10,fontSize: 25,paddingHorizontal: 25,borderRightWidth: 1,color: 'white',}}>Login</Text>
            <Text  style={{padding: 10,fontSize: 25,paddingHorizontal: 25}}>Sign In</Text>
           </View>
           <View style={{width: '80%',height: '50%',justifyContent: 'center',alignItems: 'center',rowGap: 20,backgroundColor: 'white',borderRadius: 20,rowGap: 20}}>
            <TextInput value={name}  onChangeText={handleTextChange} placeholder='Username' style={{fontSize: 14,borderWidth:1,padding: 15,paddingHorizontal: 35,width: '80%',borderRadius: 30,borderColor: 'grey'}} />
            <TextInput placeholder='Enter Password' style={{fontSize: 14,borderWidth:1,padding: 15,paddingHorizontal: 35,width: '80%',borderRadius: 30,borderColor: 'grey'}}/>
           </View>
           {/* forgotton password */}
           <View style={{width: '80%'}}>
            <Text style={{textAlign: 'right',fontSize: 18}}>Forget password?</Text>
           </View>
            <TouchableOpacity style={styles.button} onPress={()=>{
               if(!name.length){
                setClick(false);
              }
              if (name.length > 5)
              setClick(true);
              setUsername(name);
            }}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Login;
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(206,207,90,255)',
    paddingVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: '40%',
    margin: 'auto'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign:'center',
    fontSize: 20
  },
})

