import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.colors['base-background']};
    color: ${({ theme }) => theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, text, button {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 400;
    font-size: ${({ theme }) => theme.textSizes['text-regular-m']}
  }

  button: {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  // Remove botãozinho incrementar/decrementar valor
  // em input do tipo 'number'
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`
