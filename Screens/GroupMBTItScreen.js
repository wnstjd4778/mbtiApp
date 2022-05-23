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
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import { CommonActions } from "@react-navigation/native";

const MbtiResultScreen: () => Node = ({navigation, route}) => {
  const group = route.params.group;
  const BackIcon = props => <Icon {...props} name="arrow-back" />;

  const CheckIcon = props => (
    <Icon {...props} name="checkmark-circle-2-outline" />
  );

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() =>  navigation.dispatch(CommonActions.navigate('Group'))} />
  );

  return (
    <View style={styles.container}>
      <TopNavigation
        alignment="center"
        title="MBTI"
        accessoryLeft={renderBackAction}
      />
      <View style={{flex: 1}} />
      <View style={styles.logoArea}>
        {group.mbti.map(mbti => (
          <Text key={mbti} style={styles.title}>
            {mbti}
          </Text>
        ))}
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
});

export default MbtiResultScreen;
