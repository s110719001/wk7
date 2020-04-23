import React from "react";
import { StyleSheet, Text, View ,Image ,Button} from "react-native";


const Favoritescreen = ( navigation ) => {
    return (
      <View style={styles.container}>
        <Text style={styles.w1}>Favorite</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#05ACD3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    w1: {
      fontSize:40,
      color:'#BBBF95',

    },
    
    
    
  });
 
  
  export default Favoritescreen;