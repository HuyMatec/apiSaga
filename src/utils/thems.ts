import {ViewStyle, TextStyle} from 'react-native';

interface Styles {
  viewStyle: ViewStyle;
  buttonStyle: ViewStyle;
  textStyle: TextStyle;
}

export const generateStyles = (getMode: boolean): Styles => {
  const viewStyle: ViewStyle = {
    backgroundColor: getMode ? 'black' : 'white',
  };
  const buttonStyle: ViewStyle = {
    borderColor: getMode ? 'white' : 'black',
  };
  const textStyle: TextStyle = {
    color: getMode ? 'white' : 'black',
  };
  return {
    viewStyle,
    buttonStyle,
    textStyle,
  };
};
