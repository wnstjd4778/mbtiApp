/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import StudyGroup from '../Component/StudyGroup';

const ProfileScreen: () => Node = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={{backgroundColor: '#5AD2FF', marginBottom: hp(2)}}>
          <Text style={styles.Text}>내 정보</Text>
        </View>
        <TouchableOpacity
          style={{
            marginTop: hp(2),
            marginRight: wp(2),
            backgroundColor: 'red',
            borderRadius: 8,
          }}
          onPress={() => navigation.navigate('Logo')}
        >
          <Text style={{color: 'white', fontSize: 17, textAlign: 'center'}}>
            로그아웃
          </Text>
        </TouchableOpacity>
      </View>
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
