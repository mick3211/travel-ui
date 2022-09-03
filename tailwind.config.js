/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
        './src/partials/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        screens: {
            sm: '640px',

            md: '768px',

            lg: '1024px',

            xl: '1126px',
        },

        extend: {
            borderRadius: {
                '4xl': '32px',
            },
        },
    },
    plugins: [],
};
