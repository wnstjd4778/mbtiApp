/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TestScreen: () => Node = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <View style={styles.titleArea} />
        <View style={styles.TextArea}>
          <Text style={styles.Text}>1. 안녕하세요</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //전체의 공간을 차지한다는 의미
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  topArea: {
    flex: 1.5,
    paddingTop: wp(2),
  },
  TextArea: {
    flex: 0.3,
    justifyContent: 'center',
    paddingTop: hp(3),
  },
  Text: {
    fontSize: wp(4),
    paddingLeft: wp(5),
  },
});

export default TestScreen;
