import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { TopBar, BottomSheet, CustomMarker } from '../../components';
import { MARKERS_DATA } from '../../data';
import { useMap } from './useMap';
import { mapStyle } from './mapStyle';

export function MapScreen() {
  const {
    mapRef,
    selectedMarker,
    handleNavigateToPoint,
    handelResetInitialPosition,
  } = useMap();

  return (
    <View style={styles.container}>
      <TopBar onPressElement={handelResetInitialPosition} />
      <MapView
        ref={mapRef}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 41.3995345,
          longitude: 2.1909796,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
        mapType="standard"
      >
        {MARKERS_DATA.map((marker) => (
          <CustomMarker
            key={marker.id}
            id={marker.id}
            selectedMarker={selectedMarker}
            color={marker.color}
            latitude={marker.latitude}
            longitude={marker.longitude}
          ></CustomMarker>
        ))}
      </MapView>
      <BottomSheet onPressElement={handleNavigateToPoint} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
