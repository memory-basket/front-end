import Navigation from './src/navigations';
import React from 'react';
import { useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

export default function App() {
  // const [fontsLoaded] = Font.loadAsync({
  //   'my-custom-font': require('./assets/fonts/GyeonggiBatangTTF_Regular.ttf'),
  //   // 'my-second-font' : require('../assets/fonts/SUIT-Regular.ttf'),
  // });

  // const onLayoutRootView = useCallback(async () => {}, [fontsLoaded]);

  // useEffect(() => {
  //   const loadFonts = async () => {
  //     await Font.loadAsync({
  //       'my-custom-font': require('./assets/fonts/GyeonggiBatangTTF_Regular.ttf'),
  //     });
  //   };

  //   loadFonts();
  // }, []);

  // useEffect(() => {
  //   //SoundManager.loadSound(require('./images/bgm.wav'));
  // }, []);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    //<Navigation onLayout={onLayoutRootView}></Navigation>
    <Navigation></Navigation>
  );
}
