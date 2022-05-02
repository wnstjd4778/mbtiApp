import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

function TestForm({problem, tests, test, index, setTests}) {
  const checked = value => {
    setTests([
      ...tests.slice(0, index),
      value,
      ...tests.slice(index + 1, tests.length + 1),
    ]);
  };
  return (
    <View style={styles.TestArea}>
      <Text style={styles.indexText}>{index + 1}</Text>
      <Text style={styles.Text}>{problem}</Text>
      <View style={styles.CircleArea}>
        <TouchableOpacity
          onPress={() => checked(1)}
          style={[styles.FirstCircle, test === 1 ? styles.check : '']}>
          {test === 1 ? (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="check" />
            </View>
          ) : (
            <View />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => checked(2)}
          style={[styles.SecondCircle, test === 2 ? styles.check : '']}>
          {test === 2 ? (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="check" />
            </View>
          ) : (
            <View />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => checked(3)}
          style={[styles.ThirdCircle, test === 3 ? styles.check : '']}>
          {test === 3 ? (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="check" />
            </View>
          ) : (
            <View />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => checked(4)}
          style={[styles.FourthCircle, test === 4 ? styles.check : '']}>
          {test === 4 ? (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="check" />
            </View>
          ) : (
            <View />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => checked(5)}
          style={[styles.FifthCircle, test === 5 ? styles.check : '']}>
          {test === 5 ? (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="check" />
            </View>
          ) : (
            <View />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TestArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(1),
    backgroundColor: 'white',
  },
  Text: {
    flex: 1,
    fontSize: 15,
    paddingBottom: hp(3),
    paddingHorizontal: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  indexText: {
    flex: 1,
    fontSize: 15,
    paddingBottom: hp(1),
    fontWeight: 'bold',
  },
  SecondCircle: {
    flex: 1,
    marginHorizontal: wp(3),
    height: hp(3),
    borderRadius: 50,
    borderColor: 'green',
    borderWidth: 3,
  },
  ThirdCircle: {
    flex: 1,
    marginHorizontal: wp(3),
    height: hp(3),
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 3,
  },
  FourthCircle: {
    flex: 1,
    height: hp(3),
    borderRadius: 50,
    marginHorizontal: wp(3),
    borderColor: 'red',
    borderWidth: 3,
  },
  FifthCircle: {
    flex: 1,
    height: hp(3),
    borderRadius: 50,
    borderColor: 'red',
    borderWidth: 3,
    marginHorizontal: wp(3),
  },
  FirstCircle: {
    flex: 1,
    marginHorizontal: wp(3),
    height: hp(3),
    borderRadius: 50,
    borderColor: 'green',
    borderWidth: 3,
  },
  CircleArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  check: {
    backgroundColor: 'pink',
  },
});

export default TestForm;
