import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Card,
  Icon,
  List,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
const data = new Array(8).fill({
  title: 'Item',
});

const PostScreen = ({navigation}) => {
  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category="h6">
        {info.item.title} {info.index + 1}
      </Text>
    </View>
  );

  const renderItemFooter = footerProps => (
    <Text {...footerProps}>By Wikipedia</Text>
  );

  const renderItem = info => (
    <Card
      style={styles.item}
      status="basic"
      header={headerProps => renderItemHeader(headerProps, info)}
      footer={renderItemFooter}>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Text>
    </Card>
  );

  const BackIcon = props => <Icon {...props} name="arrow-back" />;

  const EditIcon = props => <Icon {...props} name="edit" />;

  const renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction
        icon={EditIcon}
        onPress={() => navigation.navigate('InsertPost')}
      />
    </React.Fragment>
  );

  const renderBackAction = () => <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()}/>;

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
        data={data}
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
