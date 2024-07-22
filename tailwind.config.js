export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom':
          'linear-gradient(267deg, #da7c25 0.36%, #b923e1 102.06%)',
        'gradient-drawer':
          'linear-gradient(90deg, rgba(56, 6, 6, 1) 0%, rgba(0, 0, 0, 1) 29%)',
      },
    },
  },
  plugins: [],
};
