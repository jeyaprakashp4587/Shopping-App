import {KeyboardAvoidingView,StyleSheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Details from './Pages/Details'
import Footer from './screens/Footer'
import Search from './Pages/SearchDetails'
import Orders from './Pages/Orders';
import User from './Pages/User';

const Layout = ()=> {
    const Stack = createStackNavigator();
    return (
     <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={{flex: 9}}>  
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>
            <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
            <Stack.Screen name='Orders' component={Orders} options={{headerShown: false}}/>
            <Stack.Screen name='User' component={User} options={{headerShown: false}}/>
        </Stack.Navigator>
        </View>
        <View style={{flex:0.8}}>
            <Footer/>
        </View>
    </KeyboardAvoidingView>
    )
}
export default Layout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(246, 246, 246, 255)'
        },
})