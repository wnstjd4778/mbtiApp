/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, AsyncStorage, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const FirstScreen: () => Node = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('email').then(value =>
        navigation.replace(value === null ? 'Logo' : 'Main'),
      );
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={{flex: 1}} />
      <View style={styles.logoArea}>
        <Text style={styles.title}>mbti</Text>
      </View>
      <View style={{flex: 1}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //전체의 공간을 차지한다는 의미
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  btnArea: {
    height: hp(8),
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(1.5),
  },
  logoArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#81F7BE',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  btn: {
    flex: 1,
    marginTop: 10,
    width: wp(75),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  btnOutline: {
    flex: 1,
    marginTop: 10,
    width: wp(75),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
  },
});

export default FirstScreen;
