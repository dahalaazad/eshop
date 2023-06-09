import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import {useForm} from 'react-hook-form';
import {BackButton, InputField, PrimaryButton} from '@app/commons';
import {Colors, InputRules} from '@app/constants';
import Images from '@app/constants/Images';
import Feather from 'react-native-vector-icons/Feather';
import ImageSelectModal from '../components/ImageSelectModal';
import {useDispatch, useSelector} from 'react-redux';
import {editProfile} from '@app/redux/slices/auth/authSlice';
import {showToast} from '@app/utils/showToast';
import Spinner from 'react-native-loading-spinner-overlay';

export default function EditProfile({navigation}) {
  const dispatch = useDispatch();

  const userInfo = useSelector(state => state?.auth?.userInfo);
  const loading = useSelector(state => state?.auth?.loading);

  const [selectedImageResponse, setSelectedImageResponse] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (...props) => (
        <BackButton {...props} onBackPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: userInfo?.fullName || '',
      phoneNumber: userInfo?.phoneNumber || '',
      address: userInfo?.address || '',
      email: userInfo?.email || '',
    },
  });

  const onEditProfilePress = editProfileData => {
    const {name, phoneNumber, address, email} = editProfileData;
    let form = new FormData();
    form.append(
      'display_picture',
      Array.isArray(selectedImageResponse?.assets)
        ? {
            uri: selectedImageResponse?.assets[0]?.uri,
            name: selectedImageResponse?.assets[0]?.fileName,
            type: selectedImageResponse?.assets[0]?.type,
          }
        : null,
    );

    dispatch(
      editProfile({
        userDetails: {
          customer: {
            full_name: name,
            phone_number: phoneNumber,
            address: address,
          },
        },
        profilePic: form,
      }),
    )
      .unwrap()
      .then(originalPromiseResult => {
        if (
          originalPromiseResult?.userData?.status === 200 &&
          (form?._parts[0][1]?.uri
            ? originalPromiseResult?.userProfilePic?.status === 200
            : true)
        ) {
          showToast('success', 'Success', 'Profile Successfully Updated!');
          navigation.navigate('MainStack', {screen: 'UserProfile'});
        }
      })
      .catch(rejectedValueOrSerializedError => {
        return rejectedValueOrSerializedError;
      });
  };
  return (
    <ScrollView style={styles.container}>
      <Spinner
        visible={loading}
        color={Colors.whiteColor}
        overlayColor={Colors.loadingOverlayColor}
        animation="fade"
      />

      <ImageSelectModal
        modalState={isModalVisible}
        modalChange={setIsModalVisible}
        setSelectedImageResponse={setSelectedImageResponse}
      />

      <View style={styles.imageContainer}>
        <Image
          source={
            Array.isArray(selectedImageResponse?.assets)
              ? {uri: selectedImageResponse?.assets[0]?.uri}
              : userInfo?.displayPicturePath
              ? {uri: userInfo?.displayPicturePath}
              : Images.profilePlaceholderImage
          }
          style={styles.imageStyle}
          resizeMode="cover"
        />
      </View>

      <View style={styles.changePhotoTextContainer}>
        <Feather name="edit-3" size={15} color={Colors.checkoutPriceText} />

        <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
          <Text style={styles.changePhotoTextStyle}>Change Photo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputFieldContainer}>
        <View>
          <Text style={styles.mainTextStyle}>Full Name</Text>

          <InputField
            control={control}
            errors={errors}
            placeholderText="Your Name"
            inputName="name"
            rules={InputRules.fullName}
            outlineColor={Colors.inputFieldOutlineColor}
          />
        </View>

        <View>
          <Text style={styles.mainTextStyle}>Phone no.</Text>

          <InputField
            control={control}
            errors={errors}
            placeholderText="Your Phone No."
            inputName="phoneNumber"
            keyboardType="phone-pad"
            rules={InputRules.phone}
            outlineColor={Colors.inputFieldOutlineColor}
          />
        </View>

        <View>
          <Text style={styles.mainTextStyle}>Address</Text>

          <InputField
            control={control}
            errors={errors}
            placeholderText="Your Address"
            inputName="address"
            rules={InputRules.address}
            outlineColor={Colors.inputFieldOutlineColor}
          />
        </View>

        <View>
          <Text style={styles.mainTextStyle}>Email Address</Text>

          <InputField
            control={control}
            errors={errors}
            placeholderText="Your email"
            inputName="email"
            rules={InputRules.email}
            outlineColor={Colors.inputFieldOutlineColor}
            disabled
          />
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            buttonLabel="Update Profile"
            buttonHeight={50}
            buttonRadius={10}
            onPressHandler={handleSubmit(onEditProfilePress)}
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
    borderColor: 'none',
    borderRadius: 80,
    alignSelf: 'center',
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
