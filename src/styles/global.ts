import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
// colors
bgColor: ${props => props.theme.colors.background}
txtColor: ${props => props.theme.colors.text}
bgSecundary: ${props => props.theme.colors.secundary_text}

// Wheights
weight300: ${props => props.theme.wheight.weight300};
weight600: ${props => props.theme.wheight.weight600};
weight800: ${props => props.theme.wheight.weight800};
`