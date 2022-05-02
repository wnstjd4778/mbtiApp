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
const HomeScreen: () => Node = ({navigation}) => {
  const [chatRooms, setChatRooms] = useState([
    {title: 'infp', content: 'aaaaa', viewCnt: 5, mbti: 'intp'},
    {title: 'infp', content: 'aaaaa', viewCnt: 5, mbti: 'intp'},
    {title: 'infp', content: 'aaaaa', viewCnt: 5, mbti: 'intp'},
    {title: 'infp', content: 'aaaaa', viewCnt: 5, mbti: 'intp'},
    {title: 'infp', content: 'aaaaa', viewCnt: 5, mbti: 'intp'},
    {title: 'infp', content: 'aaaaa', viewCnt: 5, mbti: 'intp'},
    {title: 'infp', content: 'aaaaa', viewCnt: 5, mbti: 'intp'},
    {title: 'infp', content: 'aaaaa', viewCnt: 5, mbti: 'intp'},
    {title: 'infp', content: 'aaaaa', viewCnt: 5, mbti: 'intp'},
  ]);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Post')}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: hp(1),
            backgroundColor: 'white',
            height: hp(15),
          }}>
          <View
            style={{
              flex: 4,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  flex: 1,
                  marginLeft: wp(3),
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                {item.title}
              </Text>
            </View>
            <Text
              style={{
                marginBottom: hp(4),
                marginLeft: wp(3),
                fontSize: 12,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {item.content}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="eye"
                style={{marginLeft: wp(1), marginTop: hp(0.5)}}
              />
              <Text
                style={{
                  marginLeft: wp(1),
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginRight: wp(1),
                }}>
                {item.viewCnt}
              </Text>
              <Icon name="comment" style={{marginTop: hp(0.5)}} />
              <Text
                style={{marginLeft: wp(1), fontSize: 15, fontWeight: 'bold'}}>
                {item.viewCnt}
              </Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{
                marginTop: hp(2),
                marginRight: wp(2),
                backgroundColor: 'red',
                borderRadius: 8,
              }}>
              <Text style={{color: 'white', fontSize: 17, textAlign: 'center'}}>
                삭제
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={{backgroundColor: '#5AD2FF', marginBottom: hp(2)}}>
          <Text style={styles.Text}>Home</Text>
        </View>
        <FlatList
          data={chatRooms}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
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

export default HomeScreen;
