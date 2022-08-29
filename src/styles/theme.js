const theme = {
  colors: {
    primary: '#00C1AA',
    primary_light: '#94D8D0',
    primary_lighter: '#A2D8D2',
    primary_dark: '#0ABF6880',
    dark:'#000000',
    dark_light:'#181818',
    light: '#fff',
    lighter: '#E5E5E5',
    positive: '#00c07f',
    positive_light: '#00C1AA99',
    negative: '#ff3332',
    negative_light: '#e7c8c1',
    ripple_light: '#ffffff40',
    ripple_dark: '#00000040',
    white: '#FFFFFF',
    black: '#000000',
    gray:'#808080',
    neutral: '#F3F3F3',
    accent: '#FF5A5C',
  },
};

export function getForegroundColor(colorKey, variant) {
  switch (colorKey) {
    case 'primary':
      return variant == 'outline' ? 'black' : 'light';
    case 'secondary':
      return 'light';
    case 'light':
      return 'black';
    case 'accent':
      return 'primary';
    case 'positive':
    case 'negative':
      return 'light';
    case 'white':
      return 'black';
    case 'gray':
        return 'gray';
    default:
      return colorKey;
  }
}

export default theme;
