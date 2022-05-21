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
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from '@ui-kitten/components';
import axios from 'axios';
const HomeScreen: () => Node = ({navigation}) => {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    getMyStudyGroup();
  }, []);

  const getMyStudyGroup = async () => {
    await axios.get('http://10.0.2.2:3000/study/user/me').then(res => {
      console.log(res.data.data);
      if (res.data.status == 200) {
        setChatRooms(res.data.data);
      }
    });
  };

  const unenrollStudyGroup = async groupId => {
    await axios
      .post('http://10.0.2.2:3000/study/' + groupId + '/unenroll')
      .then(res => {
        if (res.data.status == 200) {
          navigation.navigate('Home');
        }
      });
  };
  const renderItem = ({item}) => {
    return (
      <View style={{flex: 5}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Post', {groupId: item._id});
          }}
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
                    .post(
                      'http://10.0.2.2:3000/study/' + item._id + '/unenroll',
                    )
                    .then(res => {
                      if (res.data.status == 200) {
                        console.log('성공');
                        getMyStudyGroup();
                      }
                    });
                }}
                style={{
                  marginTop: hp(2),
                  marginRight: wp(2),
                }}
                appearance="outline"
                status="danger">
                삭제
              </Button>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={{backgroundColor: 'white', marginBottom: hp(2)}}>
          <Text style={styles.Text}>나의 스터디 그룹은 ?</Text>
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
    color: 'black',
  },
});

export default HomeScreen;
