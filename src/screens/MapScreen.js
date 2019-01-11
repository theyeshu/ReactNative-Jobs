import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { MapView } from 'expo';

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09,
    },
  }

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  render() {
    const { mapLoaded, region: reg } = this.state;
    if (!mapLoaded) return <View style={{ flex: 1, justifyContent: 'center' }}><ActivityIndicator /></View>;

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={reg}
          onRegionChangeComplete={region => this.setState({ region })}
        />
      </View>
    );
  }
}

export default MapScreen;
