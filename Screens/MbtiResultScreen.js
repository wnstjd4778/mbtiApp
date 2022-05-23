/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {CommonActions} from '@react-navigation/native';

const MbtiResultScreen: () => Node = ({navigation}) => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getMe();
  }, [navigation]);

  const getMe = async () => {
    await axios.get('http://10.0.2.2:3000/user/me').then(res => {
      if (res.data.status == 200) {
        console.log(res.data.data);
        setProfile(res.data.data);
      }
    });
  };

  const BackIcon = props => <Icon {...props} name="arrow-back" />;

  const CheckIcon = props => (
    <Icon {...props} name="checkmark-circle-2-outline" />
  );

  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => navigation.dispatch(CommonActions.navigate('Home'))}
    />
  );

  return (
    <View style={styles.container}>
      <TopNavigation
        alignment="center"
        title="결과"
        accessoryLeft={renderBackAction}
      />
      <View style={{flex: 1}} />
      <View style={styles.logoArea}>
        <Text style={styles.title}>나의 MBTI는 </Text>
        <Text style={styles.title}>{profile.mbti}</Text>
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

export default MbtiResultScreen;
