import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

function StudyGroup(props) {
  return (
    <TouchableOpacity>
      <View
        style={{
          borderRadius: 5,
          marginLeft: wp(5),
          height: hp(3),
          marginBottom: hp(1),
        }}>
        <Text style={{color: 'black'}}>{props.location}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default StudyGroup;
