// import * as React from 'react';
// import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
// import {
//   useFonts,
//   NotoSansKR_100Thin,
//   NotoSansKR_300Light,
//   NotoSansKR_400Regular,
//   NotoSansKR_500Medium,
//   NotoSansKR_700Bold,
//   NotoSansKR_900Black,
// } from '@expo-google-fonts/noto-sans-kr';

import React, { useState, useEffect } from 'react';
 
import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  NotoSansKR_100Thin,
  NotoSansKR_300Light,
  NotoSansKR_400Regular,
  NotoSansKR_500Medium,
  NotoSansKR_700Bold,
  NotoSansKR_900Black,
} from '@expo-google-fonts/noto-sans-kr';

export default function TabOneScreen() {

  let [fontsLoaded] = useFonts({
    NotoSansKR_100Thin,
    NotoSansKR_300Light,
    NotoSansKR_400Regular,
    NotoSansKR_500Medium,
    NotoSansKR_700Bold,
    NotoSansKR_900Black,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One Pesh Test</Text>
      <View style={styles.separator} lightColor="#5E61ED" darkColor="#181920" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181920",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "NotoSansKR_700Bold"
  },
  title: {
    color: "#eee",
    fontSize: 20,
    // fontWeight: 'bold',
    fontFamily: "NotoSansKR_700Bold"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
