 import React from "react";
 import { View, Text , Image, StyleSheet } from "react-native";
 import QRCode from "react-native-qrcode-svg";
 
 const Body=()=> {
    return(
        <View style= {styles.container}>


          <Text>dgfgfdgfdgdgdhgf</Text>
          <QRCode value= 'https://github.com/valle88/ProyectoLayout.git'/>
            
          


           


        </View>

        
           

    );
}
const styles = StyleSheet.create({
    container:{
      flex:3,
      flexDirection: 'column',
      justifyContent:'space-evenly'
        


    },
   
  });

export default Body;