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
import {testProblems} from '../Constants/testProblems';
import axios from 'axios';
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
const TestScreen: () => Node = ({navigation}) => {
  const [tests, setTests] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const BackIcon = props => <Icon {...props} name="arrow-back" />;

  const CheckIcon = props => (
    <Icon {...props} name="checkmark-circle-2-outline" />
  );

  const renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction icon={CheckIcon} onPress={mbtiTest} />
    </React.Fragment>
  );

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  const mbtiTest = async () => {
    await axios
      .post('http://10.0.2.2:3000/test', {
        test: tests,
      })
      .then(res => {
        if (res.data.status == 200) {
          alert('검사를 완료하였습니다.');
          navigation.navigate('MbtiResult');
        }
      });
  };


  return (
    <View style={styles.container}>
      <TopNavigation
        alignment="center"
        title="MBTI 테스트"
        accessoryLeft={renderBackAction}
        accessoryRight={renderRightActions}
      />
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
