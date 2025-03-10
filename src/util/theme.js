import {Platform} from 'react-native';
import colors from './colors';

const DEFAULT_FONT_SIZE = 16;

const theme = {
  fontSize: {
    xs: DEFAULT_FONT_SIZE * 0.75, //12
    sm: DEFAULT_FONT_SIZE * 0.875, //14
    md: DEFAULT_FONT_SIZE, //16
    lg: DEFAULT_FONT_SIZE * 1.125, //18
    xl: DEFAULT_FONT_SIZE * 1.25, //20
    '2xl': DEFAULT_FONT_SIZE * 1.5, //24
    '3xl': DEFAULT_FONT_SIZE * 1.75, //28
    '4xl': DEFAULT_FONT_SIZE * 2, //32
    '5xl': DEFAULT_FONT_SIZE * 2.25, //36
    '6xl': DEFAULT_FONT_SIZE * 2.5, //40
    '7xl': DEFAULT_FONT_SIZE * 2.75, //44
    '8xl': DEFAULT_FONT_SIZE * 2.875, //46
    '9xl': DEFAULT_FONT_SIZE * 3, //48
  },
  get lineHeight() {
    return {
      xs: this.fontSize.xs * 1.33,
      sm: this.fontSize.sm * 1.33,
      md: this.fontSize.md * 1.33,
      lg: this.fontSize.lg * 1.33,
      xl: this.fontSize.xl * 1.33,
      '2xl': this.fontSize['2xl'] * 1.375,
      '3xl': this.fontSize['3xl'] * 1.375,
      '4xl': this.fontSize['4xl'] * 1.375,
      '5xl': this.fontSize['5xl'] * 1.375,
      '6xl': this.fontSize['6xl'] * 1.375,
      '7xl': this.fontSize['7xl'] * 1.375,
      '8xl': this.fontSize['8xl'] * 1.375,
      '9xl': this.fontSize['9xl'] * 1.375,
    };
  },
  size: {
    xs: DEFAULT_FONT_SIZE * 0.75,
    sm: DEFAULT_FONT_SIZE * 0.875,
    md: DEFAULT_FONT_SIZE,
    lg: DEFAULT_FONT_SIZE * 1.125,
    xl: DEFAULT_FONT_SIZE * 1.25,
    '2xl': DEFAULT_FONT_SIZE * 1.5,
    '3xl': DEFAULT_FONT_SIZE * 1.875,
    '4xl': DEFAULT_FONT_SIZE * 2.25,
    '5xl': DEFAULT_FONT_SIZE * 3,
  },
  actionButtonSize: {
    xs: 30,
    sm: 36,
    md: 42,
    lg: 48,
    xl: 56,
    '2xl': 70,
    '3xl': 80,
    '4xl': 90,
    '5xl': 100,
  },
  buttonSize: {
    paddingVertical: {
      xs: 5,
      sm: 6,
      md: 12,
      lg: 12,
      xl: 12,
      '2xl': 16,
      '3xl': 16,
      '4xl': 18,
      '5xl': 18,
    },
    paddingHorizontal: {
      xs: 8,
      sm: 12,
      md: 16,
      lg: 18,
      xl: 22,
      '2xl': 24,
      '3xl': 24,
      '4xl': 24,
      '5xl': 24,
    },
  },
  iconSize: {
    xs: 16,
    sm: 18,
    md: 22,
    lg: 26,
    xl: 28,
    '2xl': 32,
    '3xl': 36,
    '4xl': 40,
    '5xl': 44,
  },
  avatarSize: {
    xs: 18,
    sm: 20,
    md: 26,
    lg: 36,
    xl: 52,
    '2xl': 80,
    '3xl': 90,
    '4xl': 100,
    '5xl': 120,
  },
  badgeSize: {
    xs: 10,
    sm: 11,
    md: 12,
    lg: 13.5,
    xl: 16,
    '2xl': 18,
    '3xl': 20,
    '4xl': 22,
    '5xl': 24,
  },
  miniBadgeSize: {
    xs: 10,
    sm: 11,
    md: 12,
    lg: 13.5,
    xl: 16,
    '2xl': 18,
    '3xl': 20,
    '4xl': 22,
    '5xl': 24,
  },
  space: {
    none: 0,
    xs: DEFAULT_FONT_SIZE * 0.125,
    sm: DEFAULT_FONT_SIZE * 0.25,
    md: DEFAULT_FONT_SIZE * 0.5,
    lg: DEFAULT_FONT_SIZE * 0.625,
    xl: DEFAULT_FONT_SIZE * 0.75,
    '2xl': DEFAULT_FONT_SIZE * 0.825,
    '3xl': DEFAULT_FONT_SIZE,
    '4xl': DEFAULT_FONT_SIZE * 1.25,
    '5xl': DEFAULT_FONT_SIZE * 1.5,
    '6xl': DEFAULT_FONT_SIZE * 1.75,
    '7xl': DEFAULT_FONT_SIZE * 2,
    '8xl': DEFAULT_FONT_SIZE * 2.25,
    '9xl': DEFAULT_FONT_SIZE * 2.5,
  },
  indicatorSize: {
    xs: 0.8,
    sm: 0.9,
    md: 1,
    lg: 1.1,
    xl: 1.25,
    '2xl': 1.5,
    '3xl': 1.7,
    '4xl': 1.8,
    '5xl': 2,
  },
  colors: {...colors},

  shadow: {
    none: {
      shadowColor: 'transparent',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    },
    xs: {
      shadowColor: colors.shadowColor,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
    },
    sm: {
      shadowColor: colors.shadowColor,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    md: {
      shadowColor: colors.shadowColor,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    lg: {
      shadowColor: colors.shadowColor,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 2.62,
      elevation: 4,
    },
    '2xl': {
      shadowColor: colors.shadowColor,
      shadowOffset: {
        width: 0,
        height: 2.5,
      },
      shadowOpacity: 0.3,
      shadowRadius: 3.84,
      elevation: 5,
    },
  },
  radius: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    '2xl': 16,
    '3xl': 24,
    full: 9999,
  },
  font: {
    heading: {
      light: Platform.select({
        ios: 'AppleSDGothicNeo-Light',
        android: 'sans-serif-light',
      }),
      medium: Platform.select({
        ios: 'AppleSDGothicNeo-Medium',
        android: 'sans-serif',
      }),
      regular: Platform.select({
        ios: 'AppleSDGothicNeo-Medium',
        android: 'sans-serif',
      }),
      semibold: Platform.select({
        ios: 'AppleSDGothicNeo-SemiBold',
        android: 'sans-serif-medium',
      }),
      bold: Platform.select({
        ios: 'AppleSDGothicNeo-Bold',
        android: 'sans-serif-medium',
      }),
      extrabold: Platform.select({
        ios: 'AppleSDGothicNeo-Bold',
        android: 'sans-serif-medium',
      }),
      bolditalic: '',
    },
    body: {
      light: Platform.select({
        ios: 'AppleSDGothicNeo-Light',
        android: 'sans-serif-light',
      }),
      medium: Platform.select({
        ios: 'AppleSDGothicNeo-Medium',
        android: 'sans-serif',
      }),
      regular: Platform.select({
        ios: 'AppleSDGothicNeo-Medium',
        android: 'sans-serif',
      }),
      semibold: Platform.select({
        ios: 'AppleSDGothicNeo-SemiBold',
        android: 'sans-serif-medium',
      }),
      bold: Platform.select({
        ios: 'AppleSDGothicNeo-Bold',
        android: 'sans-serif-medium',
      }),
      extrabold: Platform.select({
        ios: 'AppleSDGothicNeo-Bold',
        android: 'sans-serif-medium',
      }),
      italic: '',
      bolditalic: '',
    },
  },
};

export default theme;
