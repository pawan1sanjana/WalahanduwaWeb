    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
          },
          animation: {
            'cup': 'bounce 2s infinite',
            'steam1': 'steam 2s ease-in-out infinite',
            'steam2': 'steam 2s ease-in-out infinite 0.2s',
            'steam3': 'steam 2s ease-in-out infinite 0.4s',
            'text': 'pulse 2s ease-in-out infinite'
          },
          keyframes: {
            steam: {
              '0%': { opacity: '0.7', transform: 'translateY(0) scaleX(1)' },
              '50%': { opacity: '0.3', transform: 'translateY(-10px) scaleX(0.8)' },
              '100%': { opacity: '0.7', transform: 'translateY(0) scaleX(1)' }
            }
          }
        },
      }
    };