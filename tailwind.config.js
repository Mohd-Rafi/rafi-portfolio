export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom':
          'linear-gradient(267deg, #da7c25 0.36%, #b923e1 102.06%)',
      },
      color: {
        'color-custom':
          'linear-gradient(267deg, #da7c25 0.36%, #b923e1 102.06%)',
      },
    },
  },
  plugins: [],
};
