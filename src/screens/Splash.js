import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const Splash = () => {
  return (
    <View style={styles.mainview}>
      <View style={styles.Textcontainer}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainview: {
    height: Deviceheight,
    width: Devicewidth,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
  },
  Textcontainer: {
    height: Deviceheight / 1.9,
    width: Devicewidth / 1.8,
    backgroundColor: 'grey',
    alignSelf: 'center',
  },
});
export default Splash;
