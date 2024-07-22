const brojColors: Record<string, string> = {};

const common: Record<string, string> = {
    white: '#FFFFFF',
    textWhite: '#FFFFFF',
    black: '#121212',
};

/** Light Colors */
const LIGHT_GRAY: Record<string, string> = {
    gray1: '#FAFAFA',
    gray2: '#F5F5F5',
    gray3: '#EEEEEE',
    gray4: '#E0E0E0',
    gray5: '#D3D3D3',
    gray6: '#C2C2C2',
    gray7: '#B5B5B5',
    gray8: '#ABABAB',
    gray9: '#9F9F9F',
    gray10: '#949494',
};

const LIGHT_GRAY_HOVER: Record<string, string> = {
    gray1: '#EDEDED',
    gray2: '#E4E4E4',
    gray3: '#D9D9D9',
    gray4: '#CDCDCD',
    gray5: '#C3C3C3',
    gray6: '#B4B4B4',
    gray7: '#A9A9A9',
    gray8: '#A1A1A1',
    gray9: '#929292',
    gray10: '#8D8D8D',
};

const LIGHT_PRIMARY: Record<string, string> = {
    primary1: '#FFF0E5',
    primary2: '#FFD1B3',
    primary3: '#FFB380',
    primary4: '#FF944D',
    primary5: '#FF751A',
    primary6: '#FA6400',
    primary7: '#CC5200',
    primary8: '#993D00',
    primary9: '#662A00',
    primary10: '#491D01',
};

const LIGHT_SECONDARY: Record<string, string> = {
    secondary1: '#E8E8FD',
    secondary2: '#D1D0FB',
    secondary3: '#BAB9F8',
    secondary4: '#8C8AF4',
    secondary5: '#7573F2',
    secondary6: '#4744EE',
    secondary7: '#1916E9',
    secondary8: '#1411BB',
    secondary9: '#0F0D8C',
    secondary10: '#0A095D',
};

const LIGHT_WARNING: Record<string, string> = {
    background: '#FFF8DE',
    disabled: '#FFE990',
    default: '#FFC400',
};

const LIGHT_CRITICAL: Record<string, string> = {
    background: '#FFE5ED',
    disabled: '#FFBBB7',
    default: '#FF3B30',
};

const LIGHT_SUCCESS: Record<string, string> = {
    background: '#E5FFEB',
    disabled: '#A3E8B4',
    default: '#34C759',
};

const LIGHT_INFORMATION: Record<string, string> = {
    background: '#E5F4FF',
    disabled: '#A4D0FF',
    default: '#007AFF',
};

const LIGHT_MEMBER: Record<string, string> = {
    member1: '#FFF0E5',
    member2: '#FFD1B3',
    member3: '#FA6400',
};

const LIGHT_LESSON: Record<string, string> = {
    lesson1: '#FFFBD6',
    lesson2: '#FFE683',
    lesson3: '#B3A100',
};

const LIGHT_LOCKER: Record<string, string> = {
    locker1: '#F3F4FF',
    locker2: '#C7CCFF',
    locker3: '#4D5BFF',
};

const LIGHT_CLOTHES: Record<string, string> = {
    clothes1: '#EAFFE0',
    clothes2: '#C9EAB2',
    clothes3: '#39B300',
};

const LIGHT_GOODS: Record<string, string> = {
    goods1: '#FFF3FE',
    goods2: '#F7CEF7',
    goods3: '#FF00E5',
};

const LIGHT_PACK: Record<string, string> = {
    pack1: '#F8F3EB',
    pack2: '#E4D5CA',
    pack3: '#8F5613',
};

const LIGHT_TEXT: Record<string, string> = {
    textDefault: '#1B1B1B',
    textSub: '#4C4C4C',
    textInfo: '#808080',
    textDisabled: '#BFBFBF',
};

/** Dark Colors */
const DARK_GRAY: Record<string, string> = {
    gray1: '#1B1B1B',
    gray2: '#222222',
    gray3: '#2E2E2E',
    gray4: '#363636',
    gray5: '#3F3F3F',
    gray6: '#494949',
    gray7: '#5A5A5A',
    gray8: '#6C6C6C',
    gray9: '#7C7C7C',
    gray10: '#8C8C8C',
};

const DARK_GRAY_HOVER: Record<string, string> = {
    gray1: '#2C2C2C',
    gray2: '#383838',
    gray3: '#484848',
    gray4: '#565656',
    gray5: '#606060',
    gray6: '#6E6E6E',
    gray7: '#767676',
    gray8: '#828282',
    gray9: '#8F8F8F',
    gray10: '#A4A4A4',
};

const DARK_PRIMARY: Record<string, string> = {
    primary1: '#491D01',
    primary2: '#662A00',
    primary3: '#993D00',
    primary4: '#CC5200',
    primary5: '#FF751A',
    primary6: '#FA6400',
    primary7: '#FF944D',
    primary8: '#FFB380',
    primary9: '#FFD1B3',
    primary10: '#FFF0E5',
};

const DARK_SECONDARY: Record<string, string> = {
    secondary1: '#0A095D',
    secondary2: '#0F0D8C',
    secondary3: '#1411BB',
    secondary4: '#1916E9',
    secondary5: '#4744EE',
    secondary6: '#7573F2',
    secondary7: '#8C8AF4',
    secondary8: '#BAB9F8',
    secondary9: '#D1D0FB',
    secondary10: '#E8E8FD',
};

const DARK_WARNING: Record<string, string> = {
    background: '#FFF6D6',
    disabled: '#F3DF91',
    default: '#FFCC00',
};

const DARK_CRITICAL: Record<string, string> = {
    background: '#FDEFF3',
    disabled: '#ECA5A1',
    default: '#FF483E',
};

const DARK_SUCCESS: Record<string, string> = {
    background: '#E5F7E9',
    disabled: '#95D0A4',
    default: '#23D04D',
};

const DARK_INFORMATION: Record<string, string> = {
    background: '#DEECF6',
    disabled: '#A2BEDC',
    default: '#1786FF',
};

const DARK_MEMBER: Record<string, string> = {
    member1: '#FA6400',
    member2: '#FFD1B3',
    member3: '#FFF0E5',
};

const DARK_LESSON: Record<string, string> = {
    lesson1: '#FFFBD6',
    lesson2: '#FFE683',
    lesson3: '#B3A100',
};

const DARK_LOCKER: Record<string, string> = {
    locker1: '#4D5BFF',
    locker2: '#C7CCFF',
    locker3: '#F3F4FF',
};

const DARK_CLOTHES: Record<string, string> = {
    clothes1: '#39B300',
    clothes2: '#C9EAB2',
    clothes3: '#EAFFE0',
};

const DARK_GOODS: Record<string, string> = {
    goods1: '#FF00E5',
    goods2: '#F7CEF7',
    goods3: '#FFF3FE',
};

const DARK_PACK: Record<string, string> = {
    pack1: '#8F5613',
    pack2: '#E4D5CA',
    pack3: '#F8F3EB',
};

const DARK_TEXT: Record<string, string> = {
    textDefault: '#FFFFFF',
    textSub: '#C5C5C5',
    textInfo: '#7C7C7C',
    textDisabled: '#5E5D5D',
};

const margins = {
    sm: '.5rem',
    base: '1rem',
    lg: '2rem',
    xl: '3rem',
};

const fonts = {
    family: {
        base: 'BROJSans',
    },
    size: {
        ssm: '1rem',
        sm: '1.2rem',
        base: '1.4rem',
        lg: '1.6rem',
        xl: '1.8rem',
        xxl: '2rem',
        title: '2.4rem',
    },
};

const size = {
    mobile: '425px',
    tablet: '768px',
    desktop: '1440px',
};

const device = {
    mobile: `@media only screen and (max-width: ${size.mobile})`,
    tablet: `@media only screen and (max-width: ${size.tablet})`,
    desktopL: `@media only screen and (max-width: ${size.desktop})`,
};

const LIGHT_COLORS = {
    ...LIGHT_GRAY,
    ...LIGHT_PRIMARY,
    ...LIGHT_SECONDARY,
    ...LIGHT_MEMBER,
    ...LIGHT_LESSON,
    ...LIGHT_LOCKER,
    ...LIGHT_CLOTHES,
    ...LIGHT_GOODS,
    ...LIGHT_PACK,
    ...LIGHT_TEXT,
    common: '#ffffff',
    scrim: '#00000040',
    hover: { ...LIGHT_GRAY_HOVER },
    warning: { ...LIGHT_WARNING },
    critical: { ...LIGHT_CRITICAL },
    success: { ...LIGHT_SUCCESS },
    information: { ...LIGHT_INFORMATION },
    text: { ...LIGHT_TEXT },
};

const DARK_COLORS = {
    ...DARK_GRAY,
    ...DARK_PRIMARY,
    ...DARK_SECONDARY,
    ...DARK_MEMBER,
    ...DARK_LESSON,
    ...DARK_LOCKER,
    ...DARK_CLOTHES,
    ...DARK_GOODS,
    ...DARK_PACK,
    ...DARK_TEXT,
    common: '#121212',
    scrim: '#000000BF',
    hover: { ...DARK_GRAY_HOVER },
    warning: { ...DARK_WARNING },
    critical: { ...DARK_CRITICAL },
    success: { ...DARK_SUCCESS },
    information: { ...DARK_INFORMATION },
    text: { ...DARK_TEXT },
};

const DEFAULT_THEME = {
    margins,
    fonts,
    device,
    ...common,
};

export const DARK_THEME = {
    ...DEFAULT_THEME,
    colors: DARK_COLORS,
};

export const LIGHT_THEME = {
    ...DEFAULT_THEME,
    colors: LIGHT_COLORS,
};
