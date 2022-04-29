/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TestScreen: () => Node = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>mbti 성격유형 검사</Text>
      <ScrollView>
        <View style={styles.TestArea}>
          <Text style={styles.Text}>1. 안녕하세요</Text>
          <View style={styles.CircleArea}>
            <TouchableOpacity style={styles.FirstCircle} />
            <TouchableOpacity style={styles.SecondCircle} />
            <TouchableOpacity style={styles.ThirdCircle} />
            <TouchableOpacity style={styles.FourthCircle} />
            <TouchableOpacity style={styles.FifthCircle} />
          </View>
        </View>
        <View style={styles.TestArea}>
          <Text style={styles.Text}>1. 안녕하세요</Text>
          <View style={styles.CircleArea}>
            <TouchableOpacity style={styles.FirstCircle} />
            <TouchableOpacity style={styles.SecondCircle} />
            <TouchableOpacity style={styles.ThirdCircle} />
            <TouchableOpacity style={styles.FourthCircle} />
            <TouchableOpacity style={styles.FifthCircle} />
          </View>
        </View>
        <View style={styles.TestArea}>
          <Text style={styles.Text}>1. 안녕하세요</Text>
          <View style={styles.CircleArea}>
            <TouchableOpacity style={styles.FirstCircle} />
            <TouchableOpacity style={styles.SecondCircle} />
            <TouchableOpacity style={styles.ThirdCircle} />
            <TouchableOpacity style={styles.FourthCircle} />
            <TouchableOpacity style={styles.FifthCircle} />
          </View>
        </View>
        <View style={styles.TestArea}>
          <Text style={styles.Text}>1. 안녕하세요</Text>
          <View style={styles.CircleArea}>
            <TouchableOpacity style={styles.FirstCircle} />
            <TouchableOpacity style={styles.SecondCircle} />
            <TouchableOpacity style={styles.ThirdCircle} />
            <TouchableOpacity style={styles.FourthCircle} />
            <TouchableOpacity style={styles.FifthCircle} />
          </View>
        </View>
        <View style={styles.TestArea}>
          <Text style={styles.Text}>1. 안녕하세요</Text>
          <View style={styles.CircleArea}>
            <TouchableOpacity style={styles.FirstCircle} />
            <TouchableOpacity style={styles.SecondCircle} />
            <TouchableOpacity style={styles.ThirdCircle} />
            <TouchableOpacity style={styles.FourthCircle} />
            <TouchableOpacity style={styles.FifthCircle} />
          </View>
        </View>
        <View style={styles.TestArea}>
          <Text style={styles.Text}>1. 안녕하세요</Text>
          <View style={styles.CircleArea}>
            <TouchableOpacity style={styles.FirstCircle} />
            <TouchableOpacity style={styles.SecondCircle} />
            <TouchableOpacity style={styles.ThirdCircle} />
            <TouchableOpacity style={styles.FourthCircle} />
            <TouchableOpacity style={styles.FifthCircle} />
          </View>
        </View>
        <View style={styles.TestArea}>
          <Text style={styles.Text}>1. 안녕하세요</Text>
          <View style={styles.CircleArea}>
            <TouchableOpacity style={styles.FirstCircle} />
            <TouchableOpacity style={styles.SecondCircle} />
            <TouchableOpacity style={styles.ThirdCircle} />
            <TouchableOpacity style={styles.FourthCircle} />
            <TouchableOpacity style={styles.FifthCircle} />
          </View>
        </View>
        <View style={styles.TestArea}>
          <Text style={styles.Text}>1. 안녕하세요</Text>
          <View style={styles.CircleArea}>
            <TouchableOpacity style={styles.FirstCircle} />
            <TouchableOpacity style={styles.SecondCircle} />
            <TouchableOpacity style={styles.ThirdCircle} />
            <TouchableOpacity style={styles.FourthCircle} />
            <TouchableOpacity style={styles.FifthCircle} />
          </View>
        </View>
        <View style={styles.TestArea}>
          <Text style={styles.Text}>1. 안녕하세요</Text>
          <View style={styles.CircleArea}>
            <TouchableOpacity style={styles.FirstCircle} />
            <TouchableOpacity style={styles.SecondCircle} />
            <TouchableOpacity style={styles.ThirdCircle} />
            <TouchableOpacity style={styles.FourthCircle} />
            <TouchableOpacity style={styles.FifthCircle} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{color: 'white', fontSize: wp('4%')}}>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={{color: 'white', fontSize: wp('4%')}}>제출</Text>
        </TouchableOpacity>
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
    flex: 20,
    paddingTop: wp(2),
    backgroundColor: 'green',
  },
  TextArea: {
    flex: 1,
    justifyContent: 'center',
  },
  TestsArea: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: wp(5),
  },
  TestArea: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: hp(5),
  },
  Text: {
    flex: 1,
    fontSize: 25,
    alignItems: 'center',
    paddingLeft: wp(5),
    paddingBottom: hp(3),
  },
  SecondCircle: {
    flex: 1,
    width: wp(3),
    height: hp(3),
    borderRadius: 50,
    borderColor: 'green',
    borderWidth: 3,
    marginRight: 16,
  },
  ThirdCircle: {
    flex: 1,
    width: wp(3),
    height: hp(3),
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 3,
    marginRight: 16,
  },
  FourthCircle: {
    flex: 1,
    width: wp(3),
    height: hp(3),
    borderRadius: 50,
    borderColor: 'red',
    borderWidth: 3,
    marginRight: 16,
  },
  FifthCircle: {
    flex: 1,
    width: wp(3),
    height: hp(3),
    borderRadius: 50,
    borderColor: 'red',
    borderWidth: 3,
    marginRight: 16,
  },
  FirstCircle: {
    flex: 1,
    width: wp(3),
    height: hp(3),
    borderRadius: 50,
    borderColor: 'green',
    borderWidth: 3,
    marginRight: 16,
  },
  CircleArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
  btnArea: {
    height: hp(8),
    flexDirection: 'row',
    // backgroundColor: 'orange',
    paddingHorizontal: wp(10),
    justifyContent: 'space-between',
    alignItems: 'space-between',
    paddingBottom: hp(1.5),
  },
  btn: {
    flex: 1,
    width: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default TestScreen;
