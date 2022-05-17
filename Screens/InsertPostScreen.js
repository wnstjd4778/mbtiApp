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
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Icon,
  Input,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

const InsertPostScreen: () => Node = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const BackIcon = props => <Icon {...props} name="arrow-back" />;

  const CheckIcon = props => (
    <Icon {...props} name="checkmark-circle-2-outline" />
  );

  const renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction
        icon={CheckIcon}
        onPress={() => navigation.navigate('InsertPost')}
      />
    </React.Fragment>
  );

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

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
        <Text style={styles.text}>내용</Text>
        <Input
          placeholder="내용을 입력하세요"
          value={content}
          textStyle={{...styles.input, minHeight: hp(50)}}
          onChangeText={nextValue => setContent(nextValue)}
        />
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
