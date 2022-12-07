import {
  UserSettingsChangePassword,
  UserSettingsChangeLanguage,
  UserSettingsDarkMode,
  UserSettingsNotification,
  UserSettingsPrivacy,
} from '@app/assets/svg';
import {
  UserSettingMenuArrow,
  UserSettingToggleButton,
} from '@app/screens/profile/settings-page/components';

export default UserSettingMenuItemData = [
  {
    id: 1,
    text: 'Change Password',
    left: <UserSettingsChangePassword />,
    right: UserSettingMenuArrow,
  },
  {
    id: 2,
    text: 'Change Language',
    left: <UserSettingsChangeLanguage />,
    right: UserSettingMenuArrow,
  },
  {
    id: 3,
    text: 'Notification',
    left: <UserSettingsNotification />,
    right: UserSettingToggleButton,
    toggleStatus: true,
  },
  {
    id: 4,
    text: 'Dark Mode',
    left: <UserSettingsDarkMode />,
    right: UserSettingToggleButton,
    toggleStatus: false,
  },
  {
    id: 5,
    text: 'Privacy Policy',
    left: <UserSettingsPrivacy />,
    right: UserSettingMenuArrow,
  },
];
