/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Icon,
  IndexPath,
  Input,
  Select,
  SelectGroup,
  SelectItem,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import Slider from '@react-native-community/slider';
import axios from 'axios';
import {MBTI} from '../Constants/mbti';
import {LOCATION} from '../Constants/testProblems';

const InsertPostScreen: () => Node = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mbtis, setMbtis] = useState(new IndexPath(0));
  const [location, setLocation] = useState(new IndexPath(0));
  const [userCount, setUserCount] = useState(1);

  const createGroup = async () => {
    const locationJson = LOCATION[location.row];
    const mbtisJson = mbtis.map(val => MBTI[val.row]);
    await axios
      .post('http://10.0.2.2:3000/study', {
        title,
        content,
        mbti: mbtisJson,
        location: locationJson,
        userCount,
      })
      .then(res => {
        alert('스터디 그룹이 생성되었습니다.');
        navigation.navigate('Home');
      });
  };

  const mbtiValues = MBTI[mbtis.row];
  const locationValues = LOCATION[location.row];

  const BackIcon = props => <Icon {...props} name="arrow-back" />;

  const CheckIcon = props => (
    <Icon {...props} name="checkmark-circle-2-outline" />
  );
  const renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction icon={CheckIcon} onPress={createGroup} />
    </React.Fragment>
  );

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  const renderOption = title => <SelectItem key={title} title={title} />;

  return (
    <View style={styles.container}>
      <TopNavigation
        alignment="center"
        title="게시판"
        accessoryLeft={renderBackAction}
        accessoryRight={renderRightActions}
      />
      <ScrollView style={{marginHorizontal: wp(5), marginTop: hp(3)}}>
        <Text style={styles.text}>제목</Text>
        <Input
          textStyle={{...styles.input, minHeight: hp(7)}}
          placeholder="제목을 입력하세요"
          value={title}
          onChangeText={nextValue => setTitle(nextValue)}
        />
        <View style={{height: hp(3)}} />
        <Text style={styles.text}>MBTI</Text>
        <Select
          placeholder="Multi"
          multiSelect={true}
          value={mbtiValues}
          selectedIndex={mbtis}
          onSelect={index => setMbtis(index)}>
          {MBTI.map(renderOption)}
        </Select>
        <Text style={styles.text}>지역</Text>
        <Select
          placeholder="Multi"
          value={locationValues}
          selectedIndex={location}
          onSelect={index => setLocation(index)}>
          {LOCATION.map(renderOption)}
        </Select>

        <Text style={styles.text}>참여가능한 사람 수</Text>
        <Slider
          onValueChange={value => setUserCount(value)}
          value={userCount}
          minimumValue={1}
          maximumValue={100}
          maximumTrackTintColor="red"
          minimumTrackTintColor="blue"
          step={1}
        />
        <Text> {userCount} </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //전체의 공간을 차지한다는 의미
    flexDirection: 'column',
  },
  input: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: hp(1),
  },
});

export default InsertPostScreen;
