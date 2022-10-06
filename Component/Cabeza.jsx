import React from "react";
import { View, Text , Image, StyleSheet } from "react-native";

const Cabeza=()=> {
   return(
       <View style= {styles.container}>
           <Image style= {styles.logo} source={require('../assets/IMG_20190906_114137.jpg') }/>
           <Text style= {styles.texto}>María del Valle Deniz Díaz</Text>
       </View>
   );
}
const styles = StyleSheet.create({
   container:{
    width:'100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    

   },
   logo: {
    marginTop: 10,
     width: 120,
     height: 120,
     backgroundColor: 'yellow',
     borderRadius: 55
   },
   texto:{
    justifyContent: 'space-between',
    fontSize:20,
    fontWeight: 'bold',
    color: 'white'
   }
 });

export default Cabeza;