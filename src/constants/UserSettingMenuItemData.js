import {
  UserSettingChangeLanguageIcon,
  UserSettingChangePasswordIcon,
  UserSettingDarkMode,
  UserSettingNotification,
  UserSettingPrivacy,
} from '@app/assets/svg';
import {
  UserSettingMenuArrow,
  UserSettingToggleButton,
} from '@app/screens/profile/settings-page/components';

export default UserSettingMenuItemData = [
  {
    id: 1,
    text: 'Change Password',
    left: <UserSettingChangePasswordIcon />,
    right: UserSettingMenuArrow,
    navigationRoute:'ChangePassword'
  },
  {
    id: 2,
    text: 'Change Language',
    left: <UserSettingChangeLanguageIcon />,
    right: UserSettingMenuArrow,
  },
  {
    id: 3,
    text: 'Notification',
    left: <UserSettingNotification />,
    right: UserSettingToggleButton,
    toggleStatus: true,
  },
  {
    id: 4,
    text: 'Dark Mode',
    left: <UserSettingDarkMode />,
    right: UserSettingToggleButton,
    toggleStatus: false,
  },
  {
    id: 5,
    text: 'Privacy Policy',
    left: <UserSettingPrivacy />,
    right: UserSettingMenuArrow,
  },
];
