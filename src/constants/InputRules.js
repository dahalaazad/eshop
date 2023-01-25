export const InputRules = {
  email: {
    required: {
      value: true,
      message: 'Provide an email address',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Enter a valid email address',
    },
  },
  fullName: {
    required: {
      value: true,
      message: 'Please enter your full name',
    },
    minLength: {
      value: 6,
      message: 'Minium 6 characters',
    },
  },
  password: {
    required: {
      value: true,
      message: 'Enter a password',
    },
    minLength: {
      value: 6,
      message: 'Minimum 6 characters',
    },
  },
  confirmPassword: {
    required: {
      value: true,
      message: 'Confirm your password',
    },
  },
};
