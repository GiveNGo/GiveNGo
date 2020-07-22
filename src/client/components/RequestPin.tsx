import React, { useState } from "react";
import { View } from "react-native";
import { Text, Button } from '@ui-kitten/components';
import { Marker } from "react-native-maps";


const RequestPin = (props:any) => {
  const [text, setText] = useState(false);

  const onPressButton = () => {
    if(text){
      return setText(false)
    } else {
      return setText(true)
    }
  }

  const CustomMarker = () => {
    if(text){
      return (
        <View 
          style={{
            display:'flex', 
            flexDirection:'column',  
            justifyContent:'space-between', 
            height: 200,
            width: 200,
            backgroundColor: '#fff',
            borderColor: "#eee",
            borderRadius: 5,
            elevation: 10
        }}>
        <Button 
        style={{ alignSelf: "flex-start" }}
        appearance='ghost'
        onPress={onPressButton}>
        X
        </Button>
        <Text
        style={{ alignSelf: "center" }}
        >Flour</Text>
        {/* <Button onPress={() => navigation.navigate('Dashboard')} title='Give'/> */}
        <Button 
        appearance='outline'
        onPress={onPressButton}>
       Give
       </Button>
        </View>
      )
    } else {
      return(
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 30,
            backgroundColor: 'none',
            borderColor: "#eee",
            borderRadius: 5,
            elevation: 10
        }}>
        <Button
        appearance='ghost'
        onPress={onPressButton}
        >
        📍
        </Button>
        </View>
      )
    }
  };


  return (
    <Marker coordinate={props.coordinate}>
      <CustomMarker />
    </Marker>
  );
};

export default RequestPin;