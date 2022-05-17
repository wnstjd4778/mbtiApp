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
import StudyGroup from '../Component/StudyGroup';
import Search from '../Component/Search';
import Modal from 'react-native-modal';
import {ApplicationProvider, Button} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const ChatRoomScreen: () => Node = () => {
  const [chatRooms, setChatRooms] = useState([
    {title: '스터디그룹1', mbti: 'intp'},
    {title: '스터디그룹2', mbti: 'intp'},
    {title: '스터디그룹3', mbti: 'intp'},
    {title: '스터디그룹4', mbti: 'intp'},
    {title: '스터디그룹5', mbti: 'intp'},
    {title: '스터디그룹6', mbti: 'intp'},
    {title: '스터디그룹7', mbti: 'intp'},
  ]);
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const renderItem = ({item}) => {
    return (
      <View style={{flex: 2}}>
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
            <TouchableOpacity style={{flex: 1}} onPress={showModal}>
              <Text style={styles.listBottomText}> 소개 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}} onPress={showModal}>
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
          height: hp(5),
          backgroundColor: 'white',
          marginBottom: hp(1),
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <StudyGroup location="전체" />
        <StudyGroup location="서울" />
        <StudyGroup location="수도권" />
        <StudyGroup location="충북/충남/대전" />
        <StudyGroup location="전북" />
        <StudyGroup location="전남/광주" />
        <StudyGroup location="경북/대구" />
        <StudyGroup location="경남/부산/울산" />
        <StudyGroup location="강원" />
        <StudyGroup location="제주" />
        <StudyGroup location="기타" />
      </ScrollView>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        data={chatRooms}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
      <Modal visible={visible} onDismiss={hideModal}>
        <View style={styles.modalStyle}>
          <Text>Example Modal. Click outside this area to dismiss.</Text>
          <Button title="Hide modal" onPress={hideModal} />
        </View>
      </Modal>
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
