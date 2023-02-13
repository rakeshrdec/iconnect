/**
 * Sample React Native Login
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import type {Node} from 'react';
import {
    Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const Login: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };
const Stack = createNativeStackNavigator();

const Login = ({navigation}) =>{

  return (
    <View style={{flex:1, backgroundColor:'darkblue', justifyContent:'center', alignItems:'center'}}>
        <View style={{borderWidth:1,width:'95%',backgroundColor:'yellow', borderRadius:25, padding:20}}>
            <Text style={{color:'black', textAlign:'center', justifyContent:'center', fontWeight:'bold'}}>iNi Labs SCHOOL</Text>
            <Text style={{textAlign:'left', color:'black',  fontWeight:'bold'}}>Username</Text>
            <TextInput style={{width:'100%', borderWidth:1,color:'black', textAlign:'center', justifyContent:'center', fontWeight:'bold', placeholder:'Username', borderRadius:25,height:40}}
            placeholder='Username'
            placeholderTextColor='black'></TextInput>
             <Text style={{textAlign:'left', color:'black',  fontWeight:'bold'}}>Password</Text>
            <TextInput style={{width:'100%', borderWidth:1,color:'black', textAlign:'center', justifyContent:'center', fontWeight:'bold', placeholder:'Username', borderRadius:25,height:40}}
            placeholder='Password'
            placeholderTextColor='black'></TextInput>
            <Pressable 
            onPress={()=>{navigation.navigate("HomePage")}}
            style={{backgroundColor:'white', borderRadius:25,width:'100%',height:40, elevation:10,marginVertical:10, justifyContent:'center'}}>
                <Text style={{color:'black', textAlign:'center',fontWeight:'bold'}}>Login</Text>
            </Pressable>
            {/* <Text style={{color:'black'}}>I am a...</Text> */}
            {/* <View style={{flexDirection:'row',display:'flex',justifyContent:'space-around'}}>                
            <Pressable style={{backgroundColor:'white',borderRadius:150, width:100,height:40,justifyContent:'center',alignItems:'center',backgroundColor:'white',elevation:10}}>
                <Text style={{color:'black'}}>TEACHER</Text>
            </Pressable>
            <Pressable style={{backgroundColor:'white',borderRadius:150, width:100,height:40,justifyContent:'center',alignItems:'center',backgroundColor:'white',elevation:10}}>
                <Text style={{color:'black'}}>STUDENT</Text>
            </Pressable>
            </View> */}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default Login;
