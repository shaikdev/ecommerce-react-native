import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {Platform} from 'react-native';
GoogleSignin.configure({
  webClientId:
    Platform.OS === 'android'
      ? '580727078144-0vreea52abvg1d876jc2grtuth9achkr.apps.googleusercontent.com'
      : '580727078144-3dupj7pdmqghe79v8q58anre33a22tgl.apps.googleusercontent.com',
});

export const onGoogleButtonPress = async () => {
  try {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices();
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const data = await auth().signInWithCredential(googleCredential);
    return data;
  } catch (err: any) {
    console.log(err);
  }
};

export const onGoogleSignout = async () => {
  try {
    const singnOurt = await auth().signOut();
  } catch (err: any) {}
};
