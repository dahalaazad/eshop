import {StyleSheet} from 'react-native';
import {Colors, TextStyle} from '@app/constants';

export const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.loginBackgroundColor,
    flex: 1,
    paddingHorizontal: 16,
  },
  inputFieldContainer: {
    width: '100%',
    paddingBottom: 5,
  },
  headingText: {
    ...TextStyle.lexendLargeBold,
    color: Colors.blackColor,
  },
  subtitleText: {
    ...TextStyle.poppinsLargeLight,
    color: Colors.subtitleTextColor,
    textAlign: 'center',
    paddingTop: 6,
  },
  footerText: {
    ...TextStyle.poppinsRegularLight,
    color: Colors.footerTextColor,
  },
  footerLinkText: {
    ...TextStyle.poppinsRegularLight,
    color: Colors.textLinkColor,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  signupFooterContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 50,
  },
  forgotPasswordLink: {
    ...TextStyle.poppinsLargeLight,
    color: Colors.textLinkColor,
    alignSelf: 'center',
    paddingTop: 15,
  },
  loginButtonContainer: {
    paddingTop: 45,
  },
  signupButtonContainer: {
    paddingTop: 30,
  },
  errorText: {
    ...TextStyle.poppinsLargeLight,
    fontSize: 12,
    color: Colors.errorTextColor,
  },
  privacyPolicyContainer: {
    flexDirection: 'row',
    paddingTop: 14,
    width: '95%',
    alignItems: 'center',
  },
  policyText: {
    ...TextStyle.poppinsRegularLight,
    color: Colors.subtitleTextColor,
    paddingTop: 6,
  },
  policyLinkText: {
    ...TextStyle.poppinsRegularLight,
    color: Colors.textLinkColor,
  },
});
