import React from 'react';
import { Text, View, ScrollView, FlatList, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import * as Device from 'expo-device'
// import { FlatList } from 'react-native-gesture-handler';

const DeviceProperties = [
  {
    name: "Device",
    value: Device.isDevice ? 'Yes' : 'No'
  },
  {
    name: 'Device name',
    value: Device.deviceName
  },
  {
    name: 'Brand',
    value: Device.brand
  },
  {
    name: 'Manufacturer',
    value: Device.manufacturer
  },
  {
    name: 'Model',
    value: Device.modelName
  },
  {
    name: 'Design',
    value: Device.designName
  },
  {
    name: 'Product',
    value: Device.productName
  },
  {
    name: 'Year',
    value: Device.deviceYearClass
  },
  {
    name: 'Memory',
    value: Device.totalMemory
  },
  {
    name: 'Supported CPU Arc',
    value: Device.supportedCpuArchitectures
  },
  {
    name: 'OS',
    value: Device.osName
  },
  {
    name: 'OS version',
    value: Device.osVersion
  },
  {
    name: 'Build ID',
    value: Device.osBuildId
  },
  {
    name: 'Internal Build ID',
    value: Device.osInternalBuildId
  },
  {
    name: 'Build Fingerprint',
    value: Device.osBuildFingerprint
  },
  {
    name: 'Platform API Level',
    value: Device.platformApiLevel
  }
]

function ListView({property}) {
  const {name, value} = property.item
  return (
    <View style={styles.property}>
      <Text style={styles.propertyName}>{name}</Text>
      <Text style={styles.propertyValue}>{value}</Text>
    </View>
  )
}

export default function DeviceInfoScreen() {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={DeviceProperties}
        renderItem={item => <ListView property={item} />}
        keyExtractor={(item, index) => JSON.stringify(index)} 
      />
      {/* { DeviceProperties.map( (property, key) => <Text key={key} style={styles.property}>{property}</Text>) } */}
    </ScrollView>
  );
}

DeviceInfoScreen.navigationOptions = {
  title: 'Your Device Information',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  property: {
    backgroundColor:"#eee",
    padding:20,
    marginHorizontal: 10,
    marginTop: 10
  },
  propertyName: {
    fontSize: 10
  },
  propertyValue: {
    fontSize: 15
  }
});
