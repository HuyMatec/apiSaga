import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';
import {darkMode, loadingPost} from '../Redux/Selector/appSelector';
import {useAppDispatch, useAppSelector} from '../Redux/store';
import {generateStyles} from '../utils/thems';

import {commentById} from '../Redux/Selector/appSelector';
import {getCommentById} from '../Redux/Reducers/commentById.Reducer';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from './Home'; // Thay bằng đường dẫn đến tệp chứa RootStackParamList

type ProductScreenRouteProp = RouteProp<RootStackParamList, 'Product'>;

const Product = () => {
  const commentId = useAppSelector(commentById);

  const route = useRoute<ProductScreenRouteProp>();
  const itemId = route.params.itemId;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({type: getCommentById.type, payload: itemId});
  }, [dispatch, itemId]);

  // console.log('data', commentId);
  const getMode = useAppSelector(darkMode);
  const {viewStyle, buttonStyle, textStyle} = generateStyles(getMode);
  return (
    <View style={{...viewStyle, flex: 1}}>
      <Text style={{...textStyle}}>Product</Text>
      <Text style={{...textStyle}}>{JSON.stringify(commentId)}</Text>
    </View>
  );
};

export default Product;
