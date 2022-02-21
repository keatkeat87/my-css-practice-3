module.exports = {
  content: ['./src/**/*.{html,ts,js}'],
  theme: {
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
      // body: ['Dancing Script', 'cursive'],
    },
    fontSize: {
      display: ['2.5rem', { lineHeight: 1.2 }],
      'button-display': ['1.25rem', { letterSpacing: '0.25rem' }],
      title: '1.5rem',
      subtitle: '2.5rem',
      body: '1rem',
      button: ['1rem', { letterSpacing: '0.125rem' }],
    },
    extend: {
      colors: {
        primary: 'crimson',
        analogous1: '#B248BE',
        analogous2: '#DA1280',
        complementary1: '#0093D5',
        complementary2: '#576EE6',
      },
      // note 隐患：spacing use extend not override is because tailwind reset css have use the default spacing, i don't want to break it.
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        base: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
      borderRadius: {
        card: '1rem',
        // button: '0.5rem',
      },
      zIndex: {
        1: '1',
      },
    },
  },
  plugins: [],
};
