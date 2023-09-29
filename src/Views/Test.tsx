import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {New} from '../Redux/Type';
import {useAppDispatch, useAppSelector} from '../Redux/store';
import {newSelecter} from '../Redux/Selector/newSelector';
import {getNewsSuccess, getNews} from '../Redux/Reducers/getNewReducer';

const Test = () => {
  const news = useAppSelector(newSelecter);
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getNews());
  // }, []);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          dispatch(getNews());
        }}>
        <Text>GetNew</Text>
      </TouchableOpacity>
      <Text>{JSON.stringify(news)}</Text>
    </View>
  );
};

export default Test;
