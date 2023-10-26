import { View,StyleSheet,Text} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome,faPercent, faTasks, faUser } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

  const navigation  = useNavigation();
  
  return (
    <View style={{flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center',flex: 1}}>

     <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={{justifyContent: 'center',alignItems: 'center'}}>
      <FontAwesomeIcon icon={faHome} style={styles.icon} size={22} />
      <Text style={styles.text}>Home</Text>
     </TouchableOpacity>

     <TouchableOpacity  style={{justifyContent: 'center',alignItems: 'center'}} onPress={()=> navigation.navigate("Orders")}>
     <FontAwesomeIcon icon={faTasks} style={styles.icon} size={22}/>
     <Text style={styles.text}>Order</Text>
     </TouchableOpacity>

     <TouchableOpacity  style={{justifyContent: 'center',alignItems: 'center'}}>
      <FontAwesomeIcon icon={faPercent} style={styles.icon} size={22}/>
       <Text style={styles.text}>Offers</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={{justifyContent: 'center',alignItems: 'center'}} onPress={()=> navigation.navigate("User")}>
      <FontAwesomeIcon icon={faUser} style={styles.icon} size={22}/>
      <Text style={styles.text}>Account</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Footer;

const styles = StyleSheet.create({
   icon:{
    color: 'rgba(88,98,158,255)',
   },
   hover:{
    padding: 20,
    backgroundColor: 'rgba(246,246,246,255)',
    borderRadius: 30,
    paddingHorizontal: 30
   },
   text:{
    fontSize: 14,
    fontWeight: '700',
    paddingVertical: 2,
    color: 'grey'
   }
});