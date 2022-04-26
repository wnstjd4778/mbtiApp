/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {createRef, useState} from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import 'react-native-gesture-handler';

const LogoScreen: () => Node = props => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordchk, setUserPasswordchk] = useState('');
  const [errortext, setErrortext] = useState('');
  const [errortext2, setErrortext2] = useState('');
  const idInputRef = createRef();
  const gradeInputRef = createRef();
  const passwordInputRef = createRef();
  const passwordchkInputRef = createRef();
  const nameInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');

    if (!userName) {
      alert('이름을 입력해주세요');
      return;
    }
    if (!userEmail) {
      alert('id를 입력해주세요');
      return;
    }

    if (!userPassword) {
      alert('비밀번호를 입력해주세요');
      return;
    }
    if (userPasswordchk != userPassword) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }
    const dataToSend = {
      nickName: userName,
      email: userEmail,
      password: userPassword,
    };
    let formBody = [];
    for (let key in dataToSend) {
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://localhost:3001/api/user/register', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        setErrortext2('');
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          props.navigation.navigate('RegisterFinish');
          console.log('Registration Successful. Please Login to proceed');
        } else if (responseJson.status === 'duplicate') {
          setErrortext2('이미 존재하는 아이디입니다.');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <View style={styles.titleArea} />
        <View style={styles.TextArea}>
          <Text style={styles.Text}>회원가입하여 나만의 공부 도우미</Text>
          <Text style={styles.Text}>viva를 사용해보세요 ‍📘</Text>
        </View>
      </View>

      <View style={styles.formArea}>
        <TextInput
          style={styles.textFormTop}
          placeholder={'아이디(이메일 형식)'}
          onChangeText={userId => setUserEmail(userId)}
          ref={idInputRef}
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordInputRef.current && passwordInputRef.current.focus()
          }
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.textFormMiddle}
          secureTextEntry={true}
          placeholder={'비밀번호(8자 이상)'}
          onChangeText={UserPassword => setUserPassword(UserPassword)}
          ref={passwordInputRef}
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordchkInputRef.current && passwordchkInputRef.current.focus()
          }
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.textFormMiddle}
          secureTextEntry={true}
          placeholder={'비밀번호 확인'}
          onChangeText={UserPasswordchk => setUserPasswordchk(UserPasswordchk)}
          ref={passwordchkInputRef}
          returnKeyType="next"
          onSubmitEditing={() =>
            nameInputRef.current && nameInputRef.current.focus()
          }
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.textFormBottom}
          secureTextEntry={true}
          placeholder={'닉네임'}
          onChangeText={UserName => setUserName(UserName)}
          ref={nameInputRef}
          returnKeyType="next"
          onSubmitEditing={() =>
            gradeInputRef.current && gradeInputRef.current.focus()
          }
          blurOnSubmit={false}
        />
      </View>

      <View style={{flex: 0.5, justifyContent: 'center'}}>
        {userPassword !== userPasswordchk ? (
          <Text style={styles.TextValidation}>
            비밀번호가 일치하지 않습니다.
          </Text>
        ) : null}
      </View>

      <View style={{flex: 0.7, justifyContent: 'center'}}>
        {errortext2 !== '' ? (
          <Text style={styles.TextValidation}>{errortext2}</Text>
        ) : null}
      </View>

      <View style={{flex: 0.75}}>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={handleSubmitButton}>
            <Text style={{color: 'white', fontSize: wp('4%')}}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 3}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //전체의 공간을 차지한다는 의미
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: wp(7),
    paddingRight: wp(7),
  },
  topArea: {
    flex: 1.5,
    paddingTop: wp(2),
  },
  titleArea: {
    flex: 0.7,
    justifyContent: 'center',
    paddingTop: wp(3),
  },
  TextArea: {
    flex: 0.3,
    justifyContent: 'center',
    paddingTop: hp(3),
  },
  alertArea: {
    height: wp(150),
  },
  Text: {
    fontSize: wp(4),
  },
  TextValidation: {
    fontSize: wp('4%'),
    color: 'red',
    // paddingTop: wp(5),
  },

  formArea: {
    flex: 4,
    justifyContent: 'center',
    // paddingTop: wp(10)
    // backgroundColor: 'red',
    marginBottom: hp(-5),
  },

  formArea2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    marginBottom: hp(-2),
    // alignSelf: 'stretch',
  },

  textFormTop: {
    borderWidth: 2,
    borderBottomWidth: 1,
    borderColor: 'black',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    width: '100%',
    height: hp(6),
    paddingLeft: 10,
    paddingRight: 10,
  },
  textFormMiddle: {
    borderWidth: 2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
    width: '100%',
    height: hp(6),
    paddingLeft: 10,
    paddingRight: 10,
  },
  textFormBottom: {
    borderWidth: 2,
    borderTopWidth: 1,
    borderColor: 'black',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    width: '100%',
    height: hp(6),
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnArea: {
    height: hp(8),
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(1.5),
  },
  btn: {
    flex: 1,
    width: '100%',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  inputIOS: {
    borderWidth: 2,
    borderTopWidth: 1,
    borderColor: 'black',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    width: '100%',
    height: hp(6),
    paddingLeft: 10,
    paddingRight: 10,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 2,
    borderTopWidth: 1,
    borderColor: 'black',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    width: '100%',
    height: hp(6),
    paddingLeft: 10,
    paddingRight: 10,
  },

  inputAndroid: {
    borderWidth: 2,
    borderTopWidth: 1,
    borderColor: 'black',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    color: 'black',
    height: hp(6),
    width: wp(86),
    paddingLeft: 10,
    paddingRight: 10,
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
});

export default LogoScreen;
