import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  comment,
  commentById,
  darkMode,
  iSLoading,
} from '../Redux/Selector/appSelector';
import {useAppSelector, useAppDispatch} from '../Redux/store';
import {generateStyles} from '../utils/thems';
import {getComments} from '../Redux/Reducers/commentsReducer';
import Loading from './Loading';
import {Comment} from '../Redux/Type';
import {getCommentById} from '../Redux/Reducers/commentById.Reducer';

export type RootStackParamList = {
  Home: undefined;
  Product: {itemId: string};
};
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  useEffect(() => {
    dispatch(getComments());
  }, []);

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleItemPress = (itemId: string) => {
    navigation.navigate('Product', {itemId});
  };
  const RenderItem: React.FC<Comment> = ({id, createdAt, name, avatar}) => (
    <TouchableOpacity
      onPress={() => {
        handleItemPress(id);
      }}
      style={{width: '100%', marginBottom: 10}}>
      <Text style={{fontSize: 15, ...textStyle}}>{id}</Text>
      <Text style={{fontSize: 15, ...textStyle}}>{createdAt}</Text>
      <Text style={{fontSize: 15, ...textStyle}}>{name}</Text>
      <Text style={{fontSize: 15, ...textStyle}}>{avatar}</Text>
    </TouchableOpacity>
  );

  const comments = useAppSelector(comment);

  const getMode = useAppSelector(darkMode);
  const isLoading: boolean = useAppSelector(iSLoading);
  const dispatch = useAppDispatch();
  const {viewStyle, buttonStyle, textStyle} = generateStyles(getMode);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(getComments());
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <View style={{...viewStyle, flex: 1}}>
      <Text style={{...textStyle}}>Home</Text>
      <View style={{width: '100%'}}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={comments}
          renderItem={({item}) => <RenderItem {...item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Home;
