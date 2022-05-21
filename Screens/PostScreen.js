import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Card,
  Icon,
  List,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import axios from 'axios';
const data = new Array(8).fill({
  title: 'Item',
});

const PostScreen = ({navigation, route}) => {
  const [posts, setPosts] = useState([]);

  const groupId = route.params.groupId;

  useEffect(() => {
    axios.get('http://10.0.2.2:3000/study/' + groupId + '/posts').then(res => {
      setPosts(res.data.data);
    });
  }, [groupId]);

  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category="h6">
        {info.item.title}
      </Text>
    </View>
  );

  const renderItemFooter = footerProps => <Text {...footerProps} ></Text>;

  const renderItem = info => (
    <Card
      style={styles.item}
      status="basic"
      header={headerProps => renderItemHeader(headerProps, info)}
      footer={renderItemFooter}>
      <Text>{info.item.content}</Text>
      <Text>{info.item.writer.email}</Text>
    </Card>
  );

  const BackIcon = props => <Icon {...props} name="arrow-back" />;

  const EditIcon = props => <Icon {...props} name="edit" />;

  const renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction
        icon={EditIcon}
        onPress={() => navigation.navigate('InsertPost', {groupId})}
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
      <List
        contentContainerStyle={styles.contentContainer}
        data={posts}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});

export default PostScreen;
