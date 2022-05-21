/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
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
import StudyGroup from '../Component/StudyGroup';
import Search from '../Component/Search';
import Modal from 'react-native-modal';
import {
  ApplicationProvider,
  Button,
  Layout,
  Popover,
} from '@ui-kitten/components';
import axios from 'axios';

const ChatRoomScreen: () => Node = ({navigation}) => {
  const [chatRooms, setChatRooms] = useState([]);
  const [location, setLocation] = useState('전체');

  useEffect(() => {
    axios.get('http://10.0.2.2:3000/study?location=' + location).then(res => {
      if (res.data.status == 200) {
        setChatRooms(res.data.data);
      }
    });
  }, [location]);

  const renderItem = ({item}) => {
    return (
      <View style={{flex: 5}}>
        <View
          style={{
            marginBottom: hp(1),
            backgroundColor: 'white',
            height: hp(15),
            borderRadius: 8,
          }}>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <View
              style={{
                flex: 4,
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
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
            </View>
            <View style={{flex: 1}}>
              <Button
                onPress={async () => {
                  await axios
                    .post('http://10.0.2.2:3000/study/' + item._id + '/enroll')
                    .then(res => {
                      alert('성공');
                      setLocation('전체');
                    })
                    .catch(err => {
                      alert('실패');
                    });
                }}
                style={{
                  marginTop: hp(2),
                  marginRight: wp(2),
                }}
                appearance="outline"
                status="primary">
                신청
              </Button>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderTopWidth: 1,
              borderTopColor: '#BDBDBD',
              flex: 1,
            }}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() =>
                navigation.navigate('GroupContent', {group: item})
              }>
              <Text style={styles.listBottomText}> 소개 </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => navigation.navigate('GroupMbti', {group: item})}>
              <Text style={styles.listBottomText}> mbti </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Search />
      <ScrollView
        style={{
          flex: 0.1,
          backgroundColor: 'white',
          marginBottom: hp(1),
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <StudyGroup
          location="전체"
          nowLocation={location}
          setLocation={setLocation}
        />
        <StudyGroup
          location="서울"
          nowLocation={location}
          setLocation={setLocation}
        />
        <StudyGroup
          location="수도권"
          nowLocation={location}
          setLocation={setLocation}
        />
        <StudyGroup
          location="충북/충남/대전"
          nowLocation={location}
          setLocation={setLocation}
        />
        <StudyGroup
          location="전북"
          nowLocation={location}
          setLocation={setLocation}
        />
        <StudyGroup
          location="전남/광주"
          nowLocation={location}
          setLocation={setLocation}
        />
        <StudyGroup
          location="경북/대구"
          nowLocation={location}
          setLocation={setLocation}
        />
        <StudyGroup
          location="경남/부산/울산"
          nowLocation={location}
          setLocation={setLocation}
        />
        <StudyGroup
          location="강원"
          nowLocation={location}
          setLocation={setLocation}
        />
        <StudyGroup
          location="제주"
          nowLocation={location}
          setLocation={setLocation}
        />
        <StudyGroup
          location="기타"
          nowLocation={location}
          setLocation={setLocation}
        />
      </ScrollView>
      <View style={{flex: 15}}>
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
    textAlignVertical: '//center',
    color: 'white',
    textAlign: 'center',
  },
  listBottomText: {
    flex: 1,
    fontSize: 12,
    textAlignVertical: 'center',
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  modalStyle: {
    height: hp(),
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ChatRoomScreen;
