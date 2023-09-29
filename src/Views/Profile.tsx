import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput, Button} from 'react-native';
import Toast from 'react-native-toast-message';
import {
  darkMode,
  loadingPost,
  postComments,
} from '../Redux/Selector/appSelector';
import {useAppDispatch, useAppSelector} from '../Redux/store';
// import {viewStyle, textStyle} from '../utils/thems';
import {generateStyles} from '../utils/thems';
import {Comment} from '../Redux/Type';
import {addComment, runAddComment} from '../Redux/Reducers/postCommentReducer';

const Profile = () => {
  const getLoading = useAppSelector(loadingPost);

  console.log(getLoading);

  const data: Comment = {
    id: '',
    name: '',
    createdAt: '12/7/2003',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
  };

  const getMode = useAppSelector(darkMode);
  const {viewStyle, buttonStyle, textStyle} = generateStyles(getMode);
  const dispatch = useAppDispatch();
  const getdata = useAppSelector(postComments);
  console.log(getdata);
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Thành c',
      text2: 'This is some something 👋',
    });
  };
  const showToastError = () => {
    Toast.show({
      type: 'error',
      text1: 'Lỗi',
      text2: 'This is some something 👋',
    });
  };
  const handlePost = async () => {
    await dispatch({type: runAddComment.type, payload: data});
    if (!getLoading) {
      showToast();
    } else {
      showToastError();
    }
  };

  return (
    <View style={{...viewStyle, flex: 1}}>
      <Text style={{...textStyle}}>Profile</Text>
      <TouchableOpacity onPress={handlePost}>
        <Text>POST</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
