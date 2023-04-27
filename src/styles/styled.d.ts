import 'styled-components'

declare module 'styled-components'{

    export interface DefaultTheme {
        title: string,
        colors: {
            background: string,
            secundary_background: string,
            text: string,
            secundary_text: string
        },

        wheight: {
            weight300: number;
            weight600: number;
            weight800: number;
        }
    }
}