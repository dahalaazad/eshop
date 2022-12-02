import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';

export const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.loginBackgroundColor,
    flex: 1,
    paddingHorizontal: 20,
  },
  inputFieldContainer: {
    width: '100%',
    paddingBottom: 5,
  },
  headingText: {
    color: Colors.blackColor,
    fontFamily: 'Lexend',
    fontWeight: '700',
    fontSize: 26,
  },
  subtitleText: {
    color: Colors.subtitleTextColor,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '400',
    paddingTop: 6,
    fontSize: 16,
  },
  footerText: {
    color: Colors.footerTextColor,
    fontFamily: 'Poppins',
    fontSize: 14,
  },
  footerLinkText: {
    color: Colors.textLinkColor,
    fontFamily: 'Poppins',
    fontSize: 14,
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
    fontFamily: 'Poppins',
    color: Colors.textLinkColor,
    fontSize: 16,
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
    paddingLeft: 16,
    fontSize: 12,
    fontFamily: 'Poppins',
    color: Colors.errorTextColor,
  },
  privacyPolicyContainer: {
    flexDirection: 'row',
    paddingTop: 14,
    width: '95%',
    alignItems: 'flex-start',
  },
  policyText: {
    color: Colors.subtitleTextColor,
    fontFamily: 'Poppins',
    fontWeight: '400',
    paddingTop: 6,
    fontSize: 14,
  },
  policyLinkText: {
    color: Colors.textLinkColor,
    fontFamily: 'Poppins',
    fontSize: 14,
  },
});
