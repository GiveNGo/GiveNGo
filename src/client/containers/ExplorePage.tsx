import React, { useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { View } from "react-native";
import { Text, Button } from '@ui-kitten/components';
import * as types from '../Reducer/actionsTypes';
import { useDispatch, useSelector } from 'react-redux'
import { setUserId, setUserName, setAnonymous, setEmail, setAddress, setKarma, setUserRequests, setUserTasks, setAppTasks, setCurrentTask } from '../Reducer/actions';


export default function ExplorePage ({ navigation }: any): React.ReactElement {
  const dispatch = useDispatch()
  const state = useSelector(((state: any) => state))
  const [region, setRegion] = useState({
    latitude: 52.5200066,
    longitude: 13.404954,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005
  });

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}
    >
      <Marker
        coordinate={{ latitude: 52.5200066, longitude: 13.404954 }}
        pinColor="blue">
          <Callout>
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
            // onPress={onPressButton}
            >
            X
            </Button> 
            <Text
              style={{ alignSelf: "center" }}
            >Flour</Text>
            <Button 
              appearance='outline'
              onPress={() => navigation.navigate("Give'N'Go", { screen: 'Home' })}
            >Give</Button>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
};
