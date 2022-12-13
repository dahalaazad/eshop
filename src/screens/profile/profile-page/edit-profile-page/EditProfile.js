import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {BackButton, InputField, PrimaryButton} from '@app/commons';
import {Colors} from '@app/constants';
import Images from '@app/constants/Images';
import Feather from 'react-native-vector-icons/Feather';

export default function EditProfile({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (...props) => (
        <BackButton {...props} onBackPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={Images.profileManImage}
          style={styles.imageStyle}
          resizeMode="cover"
        />
      </View>

      <View style={styles.changePhotoTextContainer}>
        <Feather name="edit-3" size={15} color={Colors.checkoutPriceText} />

        <TouchableOpacity>
          <Text style={styles.changePhotoTextStyle}>Change Photo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputFieldContainer}>
        <View>
          <Text style={styles.mainTextStyle}>Full Name</Text>

          <InputField
            labelText="Your Name"
            isPassword={false}
            passwordIcon={false}
            outlineColor={Colors.inputFieldOutlineColor}
          />
        </View>

        <View>
          <Text style={styles.mainTextStyle}>Phone no.</Text>

          <InputField
            labelText="Your Phone No."
            isPassword={false}
            passwordIcon={false}
            outlineColor={Colors.inputFieldOutlineColor}
          />
        </View>

        <View>
          <Text style={styles.mainTextStyle}>Address</Text>

          <InputField
            labelText="Your Address"
            isPassword={false}
            passwordIcon={false}
            outlineColor={Colors.inputFieldOutlineColor}
          />
        </View>

        <View>
          <Text style={styles.mainTextStyle}>Email Address</Text>

          <InputField
            labelText="Your email"
            isPassword={false}
            passwordIcon={false}
            outlineColor={Colors.inputFieldOutlineColor}
          />
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            buttonLabel="Update Profile"
            buttonHeight={50}
            buttonRadius={10}
            onPressHandler={() => alert('Profile Updated')}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  imageContainer: {
    height: 122,
    width: 122,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 80,
    alignSelf: 'center',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  changePhotoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  changePhotoTextStyle: {
    color: Colors.checkoutPriceText,
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    textDecorationLine: 'underline',
    paddingLeft: 10,
  },
  inputFieldContainer: {
    paddingHorizontal: 20,
  },
  mainTextStyle: {
    color: Colors.editProfileTextColor,
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    paddingTop: 8,
    paddingLeft: 3,
  },
  buttonContainer: {
    paddingTop: 55,
    paddingBottom: 40,
    paddingHorizontal: 70,
  },
});
ScrollView;
