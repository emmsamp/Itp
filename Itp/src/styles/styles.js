import {StyleSheet, Dimensions} from 'react-native';
import {backgroun, primary} from './colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroun,
  },
  left: {
    width,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 25,
    padding: 15,
  },
  textPrimary: {
    color: primary,
  },
  title: {
    color: primary,
    fontSize: 18,
  },
  item: {
    resizeMode: "cover",
    width: width - 30,
    height: width - 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 10,
    padding: 50,
    margin: 10,
  },
  txt: {
    fontSize: 18,
    width: width - 30,
  },
});

export default styles;
