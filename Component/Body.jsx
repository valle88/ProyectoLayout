 import React from "react";
 import { View, Text , Image, StyleSheet } from "react-native";
 import QRCode from "react-native-qrcode-svg";
 
 const Body=()=> {
    return(
        <View style= {styles.container}>


          <Text style= {styles.texto} >Me llamo María del Valle Déniz Díaz en la actualidad soy estudiante de 2º de DAM en los Salesianos La cuesta</Text>
          <QRCode value= 'https://github.com/valle88/ProyectoLayout.git'/>
            
          


           


        </View>

        
           

    );
}
const styles = StyleSheet.create({
    container:{
      flex:3,
      flexDirection: 'column',
      justifyContent:'space-evenly',
      alignItems: 'center'
        


    },
    texto:{
      fontSize:18,
      justifyContent:'center',
      marginLeft:20,
      marginRight:20

    }
   
  });

export default Body;