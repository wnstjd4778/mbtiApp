/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, IndexPath, Menu, MenuItem} from '@ui-kitten/components';

const ProfileScreen: () => Node = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  return (
    <View style={styles.container}>
      <Menu
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <MenuItem
          style={{height: hp(22.5)}}
          title="로그아웃"
          onPress={() => navigation.navigate('Logo')}
        />
        <MenuItem
          style={{height: hp(22.5)}}
          title="그룹만들기"
          onPress={() => navigation.navigate('InsertGroup')}
        />
        <MenuItem
          style={{height: hp(22.5)}}
          title="MBTI 테스트"
          onPress={() => navigation.navigate('Test')}
        />
        <MenuItem
          style={{height: hp(22.5)}}
          title="MBTI 결과 확인"
          onPress={() => navigation.navigate('MbtiResult')}
        />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //전체의 공간을 차지한다는 의미
    flexDirection: 'column',
    backgroundColor: '#dcdcdc',
  },
  chatArea: {
    flexDirection: 'row',
  },
  topArea: {
    flex: 20,
    paddingTop: wp(2),
    backgroundColor: 'green',
  },
  TextArea: {
    flex: 1,
    justifyContent: 'center',
  },
  Text: {
    fontSize: 25,
    marginVertical: hp(2),
    textAlignVertical: 'center',
    color: 'white',
    textAlign: 'center',
  },
});

export default ProfileScreen;
