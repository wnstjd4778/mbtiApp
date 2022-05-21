import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

function StudyGroup(props) {
  return (
    <TouchableOpacity
      style={{
        marginLeft: wp(5),
        flex: 1,
        marginBottom: hp(1),
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => props.setLocation(props.location)}>
      <Text style={props.location == props.nowLocation ? {color: 'blue'} : {}}>
        {props.location}
      </Text>
    </TouchableOpacity>
  );
}

export default StudyGroup;
