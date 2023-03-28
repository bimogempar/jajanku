import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styleVariables} from '../../../config/themeStyles';

const TabIcon = props => {
  let iconName = '';

  switch (props.routeName) {
    case 'Home':
      iconName = 'home';
      break;

    case 'Orders':
      iconName = 'shopping-bag';
      break;

    case 'Chat':
      iconName = 'message-square';
      break;

    case 'Profile':
      iconName = 'user';
      break;
  }

  return (
    <View style={styles.tabIconWrapper}>
      <Icon
        name={iconName}
        size={24}
        color={
          props.focused
            ? styleVariables.primaryColor
            : styleVariables.mutedColor
        }
        style={styles.tabIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabIconWrapper: {
    width: 26,
    height: 26,
    justifyContent: 'center',
  },
  tabIcon: {
    flex: 1,
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
});

export default TabIcon;
