/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const RegisterFinishScreen: () => Node = props => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}} />
      <View style={{flex: 2}}>
        <View
          style={{
            height: hp(13),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        <View
          style={{
            height: hp(7),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', fontSize: wp('4%')}}>
            회원가입이 완료되었습니다.
          </Text>
        </View>

        <View style={{height: hp(20), justifyContent: 'center'}}>
          <View style={styles.btnArea}>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.5}
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={{color: 'white', fontSize: wp('4%')}}>
                로그인하기
              </Text>
            </TouchableOpacity>
          </View>
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
    paddingLeft: wp(7),
    paddingRight: wp(7),
  },
});

export default RegisterFinishScreen;
