module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'ccc': '#cccccc',
      'green': '#94b57c',
      'gray': '#505050',
      'lightgray': '#a0a0a0',
      // 'white-op0': 'rgba(255, 255, 255, 0)',
      // 'black-op70': 'rgba(0, 0, 0, .7)'
    },
    extend: {
      backgroundSize: {
        'auto': 'auto',
        'full': '100%'
      },
      fontSize: {
        '0': '0',
        'xxs': '0.5rem',
        '5xl': '2.5rem'
      },
      zIndex: {
        '-1': '-1',
        '100': '100'
      },
      maxWidth: {
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '11/12': '91.666667%',
        '1280': '1280px',
        '1024': '1024px'
      },
      width: {
        '7/10': '70%'
      },
      padding: {
        '18/10': '180%',
        '15/10': '150%',
        'full': '100%',
        '3/10': '30%',
        '4/10': '40%',
        '6/10': '60%',
        '8/10': '80%',
        'mediabox': '56.25%'
      },
      margin: {
        '1/40': '2.5%',
        '1/25': '4%',
        '1/20': '5%',
        '1/4': '25%'
      },
      borderRadius: {
        'full': '50%'
      },
      screens: {
        'has-hover': { 'raw': '(hover: hover)' },
        '3xl': '1800px',
        'mobile': {'max': '480px'}
      },
      // animation: {
      //   'fadeInDown1/2s': 'fadeInDown 0.5s both',
      //   'fadeInDown1s': 'fadeInDown 1s both',
      //   'fadeIn1/2s': 'fadeIn 0.5s both'
      // },
      // keyframes: {
      //   fadeIn: {
      //     '0%': {
      //       opacity: '0'
      //     },
      //     '100%': {
      //       opacity: '1'
      //     }
      //   },
      //   fadeInDown: {
      //     '0%': {
      //       opacity: '0',
      //       transform: 'translate3d(0, -100%, 0)'
      //     },
      //     '100%': {
      //       opacity: '1',
      //       transform: 'none'
      //     }
      //   }
      // }
    }
  },
  variants: {
    extend: {
      zIndex: ['hover']
    },
  },
  plugins: [],
}