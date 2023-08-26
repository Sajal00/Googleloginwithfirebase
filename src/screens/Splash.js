import React, {useEffect} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('homeScreen');
    }, 1000);
  }, []);

  return (
    <View style={styles.mainview}>
      <View style={styles.Textcontainer}>
        <Text>
          This is splash screen After 1 second it will navigate home screen.
        </Text>
        <Text>There we will show google login</Text>
      </View>
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
    // backgroundColor: 'grey',
    alignSelf: 'center',
  },
});
export default Splash;
