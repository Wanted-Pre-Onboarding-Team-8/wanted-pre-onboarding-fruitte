import { createGlobalStyle } from 'styled-components';
import reset from './_reset.scss';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-size: 16px;
  }
`;

export default GlobalStyle;
