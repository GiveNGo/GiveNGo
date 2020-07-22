import React, { useState } from "react";
import MapView from "react-native-maps";
import { Layout } from '@ui-kitten/components';
import RequestPin from '../components/RequestPin';

const ExplorePage = () => {
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
      <RequestPin coordinate={{ latitude: 52.5200066, longitude: 13.404954 }}/>
    </MapView>
  );
};

export default ExplorePage;
