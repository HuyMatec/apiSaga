import {StyleSheet, Text, View, Switch, Settings} from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  AppDispatch,
  useAppDispatch,
  useAppSelector,
  RootState,
} from '../Redux/store';
import {darkMode} from '../Redux/Selector/appSelector';
import {
  changeAppMode,
  changeAppModeSuccess,
} from '../Redux/Reducers/appReducer';
import {generateStyles} from '../utils/thems';

const Setting = () => {
  const getMode = useAppSelector(darkMode);
  const dispatch = useAppDispatch();

  const {viewStyle, buttonStyle, textStyle} = generateStyles(getMode);

  const handleModeToggle = () => {
    dispatch({type: changeAppMode.type, payload: {darkMode: !getMode}});
  };

  return (
    <View style={{flex: 1, ...viewStyle}}>
      <Text style={{...textStyle}}>Setting</Text>
      <Switch
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => handleModeToggle()}
        value={getMode}
      />
    </View>
  );
};

export default Setting;
