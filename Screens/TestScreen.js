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
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TestForm from '../Component/TestForm';
import {testProblems} from '../Constants/testProblems'
const TestScreen: () => Node = () => {
  const [tests, setTests] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          paddingVertical: hp(2),
          backgroundColor: '#5AD2FF',
          color: 'white',
          textAlign: 'center',
        }}>
        mbti 성격유형 검사
      </Text>
      <ScrollView>
        {tests.map((test, index) => (
          <TestForm
            problem={testProblems[index]}
            key={index}
            tests={tests}
            test={test}
            index={index}
            setTests={setTests}
          />
        ))}
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
    backgroundColor: '#dcdcdc',
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
