export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom':
          'linear-gradient(267deg, #da7c25 0.36%, #b923e1 102.06%)',
        'gradient-drawer':
          'linear-gradient(90deg, rgba(41, 24, 16, 1) 41%, rgba(56, 6, 6, 1) 100%)',
      },
    },
  },
  plugins: [],
};
