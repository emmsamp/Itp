import {StyleSheet, Dimensions} from "react-native";
import { backgroun, primary } from "./colors";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    main: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backgroun
    },
    textPrimary: {
        color: primary,
    },
    title: {
        color: primary,
        fontSize: 18,
    },
  item: {
    width: width -30,
    height: width -30,
    },
});

export default styles;
