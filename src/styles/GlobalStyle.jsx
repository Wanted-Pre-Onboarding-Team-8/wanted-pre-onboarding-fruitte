import { createGlobalStyle } from 'styled-components';
import reset from './reset.scss';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-size: 16px;
  }
`;

export default GlobalStyle;
