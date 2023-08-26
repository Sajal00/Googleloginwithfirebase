import React, {useState} from 'react';
import {View, Image, Text, Dimensions, Button, StyleSheet} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const Home = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState('');

  // useEffect(() => {
  //   configureGoogleSignIn(); // Call configure once when component mounts
  // }, []);

  const configureGoogleSignIn = async () => {
    await GoogleSignin.configure({
      scopes: ['email'],
      // Scopes you want to request
      androidClientId:
        '767688653746-5rkk6i0bnknpfo9addk04dki5o7ed94m.apps.googleusercontent.com',
      webClientId:
        '767688653746-2kqoh7camjbq13ujffv6jntudtcf2f4d.apps.googleusercontent.com', // Replace with your web client ID
      offlineAccess: true, // Allow offline access
    });
  };

  const signIn = async () => {
    try {
      await configureGoogleSignIn(); // Call the configure function before sign-in
      await GoogleSignin.hasPlayServices();
      const {user} = await GoogleSignin.signIn();
      setloggedIn(true);
      setuserInfo(user);
      console.log('google signin response', user);
    } catch (error) {
      console.log('Google login error', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('Sign-in process canceled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Sign-in process already in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Google Play services are not available');
      } else {
        alert('An error occurred during sign-in');
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setloggedIn(false);
      setuserInfo('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.mainview}>
      <Text>Here we will show google login credential</Text>
      {loggedIn ? (
        <View
          style={{
            alignItems: 'center',
            height: Deviceheight / 1.6,
            justifyContent: 'space-evenly',
          }}>
          <View style={styles.profilephoto}>
            <Image source={{uri: userInfo.photo}} style={styles.profilephoto} />
          </View>
          <Text>Welcome , {userInfo.name}</Text>
          <Text>Email: {userInfo.email}</Text>
          <Button title="Sign out " onPress={signOut}></Button>
        </View>
      ) : (
        <Button title="Sign In with Google" onPress={signIn}></Button>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  mainview: {
    height: Deviceheight,
    width: Devicewidth,
    backgroundColor: 'skyblue',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  profilephoto: {
    height: Deviceheight / 3.7,
    width: Devicewidth / 1.9,
    backgroundColor: 'red',
    borderRadius: 120,
  },
});

export default Home;
